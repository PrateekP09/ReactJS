export class FadeAnimation {
    constructor(node) {
        this.node = node;
    }

    start(duration) {
        this.duration = duration;
        if(this.duration === 0) {
            //jump to end of animation immediately
            this.onProgress(1)
        } else {
            this.onProgress(0)
            // start animation
            this.startTime = performance.now();
            this.frameId = requestAnimationFrame(() => this.onFrame())
        }
    }

    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = Math.min(timePassed/this.duration, 1);
        this.onProgress(progress)
        if(progress < 1){
            // we will have frame to paint
            this.frameId = requestAnimationFrame(() => this.onFrame())
        }
    }

    onProgress() {
        this.node.style.opacity = progress;
    }

    stop(){
        cancelAnimationFrame(this.frameId)
        this.startTime = null;
        this.frameId = null;
        this.duration = 0;
    }
}