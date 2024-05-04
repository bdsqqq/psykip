import * as Ariakit from '@ariakit/react';
import { useEffect, useRef } from 'react';
import { BookmarkIcon, BookmarkFilledIcon, ClipboardCopyIcon, Share2Icon } from '@radix-ui/react-icons';

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
          <Ariakit.Button title="Bookmark" className="flex -m-2 p-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors outline-none focus-visible:ring-2 ring-zinc-700 ring-offset-zinc-100 dark:ring-offset-zinc-900 ring-offset-2">
            <BookmarkIcon />
          </Ariakit.Button>
          
          <Ariakit.Button title="Share" className="flex -m-2 p-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors outline-none focus-visible:ring-2 ring-zinc-700 ring-offset-zinc-100 dark:ring-offset-zinc-900 ring-offset-2">
            <Share2Icon />
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
