import * as Ariakit from '@ariakit/react';
import { useEffect, useRef } from 'react';
import { BookmarkIcon, BookmarkFilledIcon, ClipboardCopyIcon, Share2Icon } from '@radix-ui/react-icons';
import { translatorNamesByCode } from '../data/codes';

function hasSelectionWithin(element?: Element | null) {
    const selection = element?.ownerDocument.getSelection();
    if (!selection?.rangeCount) return false;
    const range = selection.getRangeAt(0);
    if (range.collapsed) return false;
    return !!element?.contains(range.commonAncestorContainer);
}
  

export const SelectionPopover = ({ children }: { children: React.ReactNode }) => {
    const popoverRef = useRef<HTMLDivElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
  
    const popover = Ariakit.usePopoverStore();
  
    useEffect(() => {
        const popoverContainer = popoverRef.current;
        const paragraph = paragraphRef.current;
        if (!popoverContainer) return;
        if (!paragraph) return;
        const doc = paragraph.ownerDocument || document;
        const onMouseUp = () => {
          if (!hasSelectionWithin(paragraph)) return;
          popover.render();
          popover.setOpen(true);
        };
        const onSelect = () => {
          if (popoverContainer.contains(doc.activeElement)) return;
          if (hasSelectionWithin(paragraph)) {
            return popover.render();
          }
          popover.setOpen(false);
        };
        doc.addEventListener('mouseup', onMouseUp);
        doc.addEventListener('selectionchange', onSelect);
        return () => {
          doc.removeEventListener('mouseup', onMouseUp);
          doc.removeEventListener('selectionchange', onSelect);
        };
      }, [popover]);


    return (
        <div ref={paragraphRef}>
            <Ariakit.PopoverProvider store={popover} placement="top">
        <Ariakit.Popover
          autoFocusOnShow={false}
          hideOnInteractOutside={() =>
            !hasSelectionWithin(paragraphRef.current)
          }
          portal
          ref={popoverRef}
          className="bg-zinc-200 border-zinc-400 dark:bg-zinc-800 border dark:border-zinc-600 shadow-sm rounded"
          getAnchorRect={() => {
            const selection =
              paragraphRef.current?.ownerDocument.getSelection();
            if (!selection?.rangeCount) return null;
            const range = selection.getRangeAt(0);
            return range.getBoundingClientRect();
          }}
        >
          <Ariakit.PopoverArrow size={24} className="arrow" />
          <div className='flex gap-2 p-1.5'>
          <Ariakit.Button onClick={() => {
            const selection = paragraphRef.current?.ownerDocument.getSelection();

            console.log("selection", selection);

            if (selection && selection.rangeCount && selection.anchorNode && selection.focusNode) {
                // anchorNode might be a text node, fallback to parent in that case
                const anchorElement = selection.anchorNode.nodeType === Node.ELEMENT_NODE 
                  ? selection.anchorNode 
                  : selection.anchorNode.parentNode;
                if(!anchorElement) {
                  console.error(`Tried to find anchor element but couldn't for selection; `, JSON.stringify(selection)); 
                  return;
                }

                // focusNode might be a text node, fallback to parent in that case
                const focusElement = selection.focusNode.nodeType === Node.ELEMENT_NODE 
                  ? selection.focusNode 
                  : selection.focusNode.parentNode;
                if(!focusElement) {
                  console.error(`Tried to find focus element but couldn't for selection: `, JSON.stringify(selection));
                  return;
                }
                
                const translation = findTranslationInAncestor(anchorElement);
                if(!translation){
                  console.error(`Tried to find translation but couldn't for selection: `, JSON.stringify(selection));
                  return;
                }
                const anchorChapter = findChapterInAncestor(anchorElement);
                const focusChapter = findChapterInAncestor(focusElement);

                const sortedChapters = [Number(anchorChapter), Number(focusChapter)].toSorted();
                const startChapter = sortedChapters[0];
                const endChapter = sortedChapters[1];
              
              const range = selection.getRangeAt(0);
              const textContent = cleanTextContentFromRange(range);

              // console.log("textContent: ", textContent)

              const chapterText = startChapter === endChapter ? `chapter ${startChapter}` : `chapters ${startChapter}-${endChapter}`;
              const footer = `The Enchiridion, ${chapterText} — translation by ${translatorNamesByCode[translation as keyof typeof translatorNamesByCode]}`;       

              const bookmark: Bookmark = {
                id: new Date().getTime().toString(),
                chapterStart: startChapter,
                chapterEnd: endChapter,
                text: textContent,
                comment: "",
                translationCode: translation,
                lastUpdated: new Date().getTime(),
              }

              saveBookmark(bookmark);
            }

          }} title="Bookmark" className="flex -m-2 p-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors outline-none focus-visible:ring-2 ring-zinc-700 ring-offset-zinc-100 dark:ring-offset-zinc-900 ring-offset-2">
            <BookmarkIcon />
          </Ariakit.Button>
          
          <Ariakit.Button title="Copy" className="flex -m-2 p-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors outline-none focus-visible:ring-2 ring-zinc-700 ring-offset-zinc-100 dark:ring-offset-zinc-900 ring-offset-2">
            <ClipboardCopyIcon />
          </Ariakit.Button>
          </div>
        </Ariakit.Popover>                           
      </Ariakit.PopoverProvider>
            {children}
        </div>
    );
};

/**
 * Collapse whitespaces to a single space.
 */
const replaceMultipleSpacesWithSingleSpace = (text: string): string => {
  // Replace all sequences of spaces (and mixed whitespace excluding new lines) with a single space
  return text.replace(/[ \t\f\v]+/g, ' ');
};

const findTranslationInAncestor = (element: Node | Element, depth = 0): string | undefined | null => {
  const MAX_DEPTH = 20;
  
  if ("attributes" in element && element?.attributes?.getNamedItem("data-translation")) {
    return element?.attributes?.getNamedItem("data-translation")?.value;
  } else {
    if (depth < MAX_DEPTH) {
      const parent = element.parentElement;
      if (parent) {
        return findTranslationInAncestor(parent, depth + 1);
      }
    }
  }
  return null;
};

const findChapterInAncestor = (element: Node | Element, depth = 0): string | undefined | null => {
  const MAX_DEPTH = 20;
  
  if ("attributes" in element && element?.attributes?.getNamedItem("data-chapter")) {
    return element?.attributes?.getNamedItem("data-chapter")?.value;
  } else {
    if (depth < MAX_DEPTH) {
      const parent = element.parentElement;
      if (parent) {
        return findChapterInAncestor(parent, depth + 1);
      }
    }
  }
  return null;
};

const hasNonSelectableParent = (node: Element, depth = 0): boolean => {
  const maxDepth = 20;

  while (node && node.parentElement) {
    if(depth > maxDepth) {
      console.warn(`Reached max depth of ${maxDepth} trying to find nonSelectableParents for node ${node.outerHTML}`);
      return false;
    }
    const style = window.getComputedStyle(node.parentElement);
    if (style.userSelect === "none" || node.parentElement.classList.contains("select-none")|| node.classList.contains("select-none")) {
      return true;
    }
    depth++;
    node = node.parentElement;
  }
  return false;
};

const cleanTextContentFromRange = (range: Range): string => {
  const documentFragment = range.cloneContents(); // Get all selected content
  const container = document.createElement("div");
    
  container.appendChild(documentFragment);

  container.querySelectorAll("*").forEach(el => {
    if (hasNonSelectableParent(el)) {
      el.remove();
    }
  });

  const textContent = container.textContent || "";
  return replaceMultipleSpacesWithSingleSpace(textContent).trim();
};  


type Bookmark = {
  id: string;
  chapterStart: number;
  chapterEnd: number;
  text: string;
  comment: string;
  translationCode: string;
  lastUpdated: number;
}
type Bookmarks = Array<Bookmark>;

const saveBookmark = async (bookmark: Bookmark) => {
  const bookmarks: Bookmarks = await getBookmarks();
  bookmarks.push(bookmark);
  await setBookmarks(bookmarks);
}

const getBookmarks = async () => {
  const bookmarksString = localStorage.getItem("bookmarks");
  if (!bookmarksString) {
    return [];
  }
  const bookmarks: Bookmarks = JSON.parse(bookmarksString);
  return bookmarks;
}

const setBookmarks = async (bookmarks: Bookmarks) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

const getBookmark = async (id: string) => {
  const bookmarks = await getBookmarks();
  return bookmarks.find((bookmark) => bookmark.id === id);
}

// you had just got bookmarks saving to local storage, now you want to display them, don't worry too much about it, just make it work.
// then merge this to main, and start work on getting react query wrapping around it, then make users (thanks clerk), then make bookmarks sync seemlessly with turso for logged users. then MAYBE wall syncing behind a paywall(if you do it, you should let users export and import their bookmarks for free).
// You probably wanna do dep injection for the bookmarks getting/setting. 
//  and you probably need some API routers to interact with turso when logged in.
// and if there's time, steal the nav from that folio lois sent on discord, and possibly put bookmaks there.