const GalleryClassName = "gallery",
    GalleryDraggableClassName = "gallery-draggable",
    GalleryLineClassName = "gallery-line",
    GalleryLineContainerClassName = "gallery-line-container",
    GallerySlideClassName = "gallery-slide",
    GalleryDotsClassName = "gallery-dots",
    GalleryDotClassName = "gallery-dot",
    GalleryDotActiveClassName = "gallery-dot-active",
    GalleryNavClassName = "gallery-nav",
    GalleryNavLeftClassName = "gallery-nav-left",
    GalleryNavRightClassName = "gallery-nav-right",
    GalleryNavDisabledClassName = "gallery-nav-disabled";
class Gallery {
    constructor(e, t = {}) { this.containerNode = e, this.size = e.childElementCount, this.currentSlide = 0, this.currentSlideWasChanged = !1, this.settings = { margin: t.margin || 0 }, this.manageHTML = this.manageHTML.bind(this), this.setParameters = this.setParameters.bind(this), this.setEvents = this.setEvents.bind(this), this.resizeGallery = this.resizeGallery.bind(this), this.startDrag = this.startDrag.bind(this), this.stopDrag = this.stopDrag.bind(this), this.dragging = this.dragging.bind(this), this.setStylePosition = this.setStylePosition.bind(this), this.clickDots = this.clickDots.bind(this), this.moveToLeft = this.moveToLeft.bind(this), this.moveToRight = this.moveToRight.bind(this), this.changeCurrentSlide = this.changeCurrentSlide.bind(this), this.changeActiveDotClass = this.changeActiveDotClass.bind(this), this.changeDisabledNav = this.changeDisabledNav.bind(this), this.manageHTML(), this.setParameters(), this.setEvents() }
    manageHTML() { this.containerNode.classList.add(GalleryClassName), this.containerNode.innerHTML = `
            <div class="${GalleryLineContainerClassName}">
                <div class="${GalleryLineClassName}">
                    ${this.containerNode.innerHTML}
                </div>
            </div>
            <div class="${GalleryNavClassName}">
                <button class="${GalleryNavLeftClassName}">Left</button>
                <button class="${GalleryNavRightClassName}">Right</button>
            </div>
            <div class="${GalleryDotsClassName}"></div>
        `, this.lineContainerNode = this.containerNode.querySelector(`.${GalleryLineContainerClassName}`), this.lineNode = this.containerNode.querySelector(`.${GalleryLineClassName}`), this.dotsNode = this.containerNode.querySelector(`.${GalleryDotsClassName}`), this.slideNodes = Array.from(this.lineNode.children).map(e => wrapElementByDiv({ element: e, className: GallerySlideClassName })), this.dotsNode.innerHTML = Array.from(Array(this.size).keys()).map(e => `<button class="${GalleryDotClassName} ${e===this.currentSlide?GalleryDotActiveClassName:""}"></button>`).join(""), this.dotNodes = this.dotsNode.querySelectorAll(`.${GalleryDotClassName}`), this.navLeft = this.containerNode.querySelector(`.${GalleryNavLeftClassName}`), this.navRight = this.containerNode.querySelector(`.${GalleryNavRightClassName}`) }
    setParameters() {
        var e = this.lineContainerNode.getBoundingClientRect();
        this.width = e.width, this.maximumX = -(this.size - 1) * (this.width + this.settings.margin), this.x = -this.currentSlide * (this.width + this.settings.margin), this.resetStyleTransition(), this.lineNode.style.width = `${this.size*(this.width+this.settings.margin)}px`, this.setStylePosition(), this.changeActiveDotClass(), this.changeDisabledNav(), Array.from(this.slideNodes).forEach(e => { e.style.width = `${this.width}px`, e.style.marginRight = `${this.settings.margin}px` })
    }
    setEvents() { this.debouncedResizeGallery = debounce(this.resizeGallery), window.addEventListener("resize", this.debouncedResizeGallery), this.lineNode.addEventListener("pointerdown", this.startDrag), window.addEventListener("pointerup", this.stopDrag), window.addEventListener("pointercancel", this.stopDrag), this.dotsNode.addEventListener("click", this.clickDots), this.navLeft.addEventListener("click", this.moveToLeft), this.navRight.addEventListener("click", this.moveToRight) }
    destroyEvents() { window.removeEventListener("resize", this.debouncedResizeGallery), this.lineNode.removeEventListener("pointerdown", this.startDrag), window.removeEventListener("pointerup", this.stopDrag), window.removeEventListener("pointercancel", this.stopDrag), this.dotsNode.removeEventListener("click", this.clickDots), this.navLeft.removeEventListener("click", this.moveToLeft), this.navRight.removeEventListener("click", this.moveToRight) }
    resizeGallery() { this.setParameters() }
    startDrag(e) { this.currentSlideWasChanged = !1, this.clickX = e.pageX, this.startX = this.x, this.resetStyleTransition(), this.containerNode.classList.add(GalleryDraggableClassName), window.addEventListener("pointermove", this.dragging) }
    stopDrag() { window.removeEventListener("pointermove", this.dragging), this.containerNode.classList.remove(GalleryDraggableClassName), this.changeCurrentSlide() }
    dragging(e) {
        this.dragX = e.pageX;
        var t = this.dragX - this.clickX,
            e = t / 5;
        this.x = Math.max(Math.min(this.startX + t, e), this.maximumX + e), this.setStylePosition(), 20 < t && 0 < t && !this.currentSlideWasChanged && 0 < this.currentSlide && (this.currentSlideWasChanged = !0, this.currentSlide = this.currentSlide - 1), t < -20 && t < 0 && !this.currentSlideWasChanged && this.currentSlide < this.size - 1 && (this.currentSlideWasChanged = !0, this.currentSlide = this.currentSlide + 1)
    }
    clickDots(e) {
        var s = e.target.closest("button");
        if (s) {
            let t;
            for (let e = 0; e < this.dotNodes.length; e++)
                if (this.dotNodes[e] === s) { t = e; break }
            t !== this.currentSlide && (e = Math.abs(this.currentSlide - t), this.currentSlide = t, this.changeCurrentSlide(e))
        }
    }
    moveToLeft() { this.currentSlide <= 0 || (this.currentSlide = this.currentSlide - 1, this.changeCurrentSlide()) }
    moveToRight() { this.currentSlide >= this.size - 1 || (this.currentSlide = this.currentSlide + 1, this.changeCurrentSlide()) }
    changeCurrentSlide(e) { this.x = -this.currentSlide * (this.width + this.settings.margin), this.setStyleTransition(e), this.setStylePosition(), this.changeActiveDotClass(), this.changeDisabledNav() }
    changeActiveDotClass() {
        for (let e = 0; e < this.dotNodes.length; e++) this.dotNodes[e].classList.remove(GalleryDotActiveClassName);
        this.dotNodes[this.currentSlide].classList.add(GalleryDotActiveClassName)
    }
    changeDisabledNav() { this.currentSlide <= 0 ? this.navLeft.classList.add(GalleryNavDisabledClassName) : this.navLeft.classList.remove(GalleryNavDisabledClassName), this.currentSlide >= this.size - 1 ? this.navRight.classList.add(GalleryNavDisabledClassName) : this.navRight.classList.remove(GalleryNavDisabledClassName) }
    setStylePosition() { this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)` }
    setStyleTransition(e = 1) { this.lineNode.style.transition = `all ${.25*e}s ease 0s` }
    resetStyleTransition() { this.lineNode.style.transition = "all 0s ease 0s" }
}

function wrapElementByDiv({ element: e, className: t }) { const s = document.createElement("div"); return s.classList.add(t), e.parentNode.insertBefore(s, e), s.appendChild(e), s }

function debounce(t, s = 100) { let i; return function(e) { clearTimeout(i), i = setTimeout(t, s, e) } }