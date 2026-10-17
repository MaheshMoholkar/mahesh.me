/**
 * Runs before first paint (put it first in <body>), so a saved dark theme never flashes light. With nothing saved the page is light, whatever the system setting.
 * Every variant uses it; only one variant is ever in a build, so they can share the "theme" storage key.
 */
export const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="dark")t="light";document.documentElement.dataset.theme=t}catch(e){}`;
