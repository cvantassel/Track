import { IonContent, DomController } from '@ionic/angular';
import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[scrollHide]'
})
export class HideHeaderDirective {

    @Input('scrollHide') config: ScrollHideConfig; // Card
    @Input('scrollContent') scrollContent: IonContent; // Page content

    contentHeight: number;
    scrollHeight: number;
    lastScrollPosition: number;
    lastValue: number = 0;
    tmpVal: number;
    flipper: boolean = true;

    constructor(private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.scrollContent && this.config) {
            this.scrollContent.ionScrollStart.subscribe(async (ev) => {
                const el = await this.scrollContent.getScrollElement();
                this.contentHeight = el.offsetHeight;
                this.scrollHeight = el.scrollHeight;
                if (this.config.maxValue === undefined) {
                    this.config.maxValue = this.element.nativeElement.offsetHeight;
                }
                this.lastScrollPosition = el.scrollTop;
            });
            this.scrollContent.ionScroll.subscribe((ev) => {
                this.adjustElementOnScroll(ev)
                // console.log("hit")
            });
            this.scrollContent.ionScrollEnd.subscribe((ev) => this.adjustElementOnScroll(ev));
        }
    }

    private adjustElementOnScroll(ev) {
        if (ev) {
            this.domCtrl.write(async () => {
                const el = await this.scrollContent.getScrollElement();
                let scrollTop: number = el.scrollTop > 0 ? el.scrollTop : 0;
                let scrolldiff: number = scrollTop - this.lastScrollPosition;
                this.lastScrollPosition = scrollTop;
                let newValue = this.lastValue + scrolldiff;
                newValue = Math.max(0, Math.min(newValue, this.config.maxValue)); //Amount to hide
                if (this.tmpVal != newValue)
                    this.renderer.setStyle(this.element.nativeElement, this.config.cssProperty, `-${newValue}px`);
                this.lastValue = newValue;
                // console.log(Math.max(0, Math.min(newValue, this.config.maxValue)));
                if (this.flipper) {
                    this.tmpVal = newValue;
                    this.flipper = false;
                } else {
                    this.flipper = true
                }

            });
        }
    }
}
export interface ScrollHideConfig {
    cssProperty: string;
    maxValue: number;
}