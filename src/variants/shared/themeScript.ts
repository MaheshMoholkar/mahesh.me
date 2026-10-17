/**
 * Runs before first paint (put it first in <body>), so a saved or system dark theme never flashes light.
 * Every variant uses it; only one variant is ever in a build, so they can share the "theme" storage key.
 */
export const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;
