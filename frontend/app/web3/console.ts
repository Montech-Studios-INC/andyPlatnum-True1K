export default function uiConsole(...args: any[]): void {

    const el = document.querySelector("#console>p");

    if (el) {
        el.innerHTML = JSON.stringify(args || {}, null, 2);
        console.log(...args);
    };
};
