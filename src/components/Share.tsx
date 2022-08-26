import { createSignal, createEffect } from "solid-js";
import { translatorNamesByCode } from "../data/codes";
import type { TranslationCode } from "../data/codes";

const appUrl = "https://psykip.vercel.app";

export default function Share({
  translationCode,
  chapterNumber,
}: {
  translationCode: TranslationCode;
  chapterNumber: string;
}) {
  const [isSuccess, setIsSuccess] = createSignal("");
  createEffect(() => {
    //TODO: clear timeout when this runs so the checkmark timing keeps getting reset when people click a lot
    if (!isSuccess()) return;

    setTimeout(() => {
      setIsSuccess("");
    }, 2000);
  });

  return (
    <div class="relative flex flex-col sm:flex-row items-center gap-1">
      <button
        title="Share"
        class="-m-2 p-2"
        onClick={async () => {
          const url = `${appUrl}/read/${translationCode}/${chapterNumber}`;

          try {
            if (navigator.share !== undefined) {
              // Browser supports share API
              await navigator.share({
                title: "Psykip",
                text: `The Enchiridion, chapter ${chapterNumber} — translation by ${translatorNamesByCode[translationCode]}`,
                url: url,
              });
              setIsSuccess("share");
            } else {
              // Browser doesn't support share API so just copy the url to the clipboard (I'm looking at you firefox 👺).
              await navigator.clipboard.writeText(url);
              setIsSuccess("copy");
            }
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {!(isSuccess() === "copy") ? <ShareSvg /> : <CheckmarkSvg />}
      </button>
      <span
        class={`absolute -m-2 top-4 sm:top-1 sm:left-6 transform-gpu transition-all pointer-events-none ${
          isSuccess() === "copy"
            ? "translate-y-0 sm:-translate-x-0 opacity-100"
            : "-translate-y-2 sm:translate-y-0 sm:-translate-x-2 opacity-0"
        }`}
      >
        Copied!
      </span>
    </div>
  );
}

function ShareSvg() {
  return (
    <svg
      class="translate-y-[1px]"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 5.00006C3.22386 5.00006 3 5.22392 3 5.50006L3 11.5001C3 11.7762 3.22386 12.0001 3.5 12.0001L11.5 12.0001C11.7761 12.0001 12 11.7762 12 11.5001L12 5.50006C12 5.22392 11.7761 5.00006 11.5 5.00006L10.25 5.00006C9.97386 5.00006 9.75 4.7762 9.75 4.50006C9.75 4.22392 9.97386 4.00006 10.25 4.00006L11.5 4.00006C12.3284 4.00006 13 4.67163 13 5.50006L13 11.5001C13 12.3285 12.3284 13.0001 11.5 13.0001L3.5 13.0001C2.67157 13.0001 2 12.3285 2 11.5001L2 5.50006C2 4.67163 2.67157 4.00006 3.5 4.00006L4.75 4.00006C5.02614 4.00006 5.25 4.22392 5.25 4.50006C5.25 4.7762 5.02614 5.00006 4.75 5.00006L3.5 5.00006ZM7 1.6364L5.5682 3.0682C5.39246 3.24393 5.10754 3.24393 4.9318 3.0682C4.75607 2.89246 4.75607 2.60754 4.9318 2.4318L7.1818 0.181802C7.26619 0.09741 7.38065 0.049999 7.5 0.049999C7.61935 0.049999 7.73381 0.09741 7.8182 0.181802L10.0682 2.4318C10.2439 2.60754 10.2439 2.89246 10.0682 3.0682C9.89246 3.24393 9.60754 3.24393 9.4318 3.0682L8 1.6364L8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5L7 1.6364Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

function CheckmarkSvg() {
  return (
    <svg
      class="translate-y-[1px]"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
