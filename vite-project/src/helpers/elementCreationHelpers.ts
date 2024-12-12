export const e = (() => {
        const createElement = (e: string, t?: string, cN?: string, id?:string) => {
            return Object.assign(document.createElement(`${e}`), {
                innerHTML: t || '',
                id: id || '',
                className: cN || ''
            })
        }, createHeading = (n: number, t: string, cN?: string, id?:string) => {
            return createElement(`h${n}`, t, `heading ${cN || ''}`.trim(), id) as HTMLHeadingElement
        }

        return {
            heading: {
                primary: (text: string, className?: string, id?: string) => {
                    return createHeading(1, text, className, id);
                },
                secondary: (text: string, className?: string, id?: string) => {
                    return createHeading(2, text, className, id);
                },
                tertiary: (text: string, className?: string, id?: string) => {
                    return createHeading(3, text, className, id);
                }
            },
            div: (className: string, id?: string) => {
                return createElement('div', className, id) as HTMLDivElement;
            },
            span: (className: string, id?: string) => {
                return createElement('span', className, id) as HTMLSpanElement;
            },
            input: (type: string, className: string, id?: string) => {
                return Object.assign(createElement('input', className, id) as HTMLInputElement, {
                    type: type
                });
            },
            button: (className: string, id?: string) => {
                return createElement('button', className, id) as HTMLButtonElement;
            }
        }
})();