<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Built-in Directives</h2>
                <p v-text="'Normal Text'"></p>
                <span v-html="'<strong>Stong Text</strong>'"></span>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Custom Global Directives</h2>
                <p v-highlight:background.delayed="'red'">A Text Highlighted Globally</p>
                <input 
                    v-focus 
                    type="text" 
                    v-model="inputText" 
                    placeholder="Enter your name">
                <span v-highlight="'green'">{{ inputText }}</span>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Custom Local Directives</h2>
                <p v-local-highlight:background.delayed.blink="{firstColor: '#F5AF19', secondColor: '#F37335', delay: 1000}">A Text Highlighted Locally</p>
                <p v-local-highlight.blink="'#FF0080'">Another Text</p>
            </div>

            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button v-custom-on:click="clicked">Click Me!</button>
                <span v-local-highlight="'#833AB4'" v-bold>{{ clickedText() }}</span>

                <hr>
                 
                <div 
                    style="width: 100px; height: 100px; background-color: #1565C0" 
                    v-custom-on:mouseenter="mouseEnterFunc"
                    v-custom-on:mouseleave="mouseLeaveFunc"
                ></div>
                <span v-bold>{{ finalText() }}</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind: function(el, binding, vnode) {
                    let delay = binding.modifiers['delayed'] ? 2000 : 0;

                    let firstColor = binding.value.firstColor ? binding.value.firstColor : '#40E0D0';
                    let secondColor = binding.value.secondColor ? binding.value.secondColor : '#833AB4';
                    let currentColor;


                    if(binding.modifiers['blink']) {
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor === firstColor ? currentColor = secondColor : currentColor = firstColor;
                                return (binding.arg === 'background') ? ((el.style.backgroundColor = currentColor) && (el.style.color = 'white')) : (el.style.color = firstColor);
                            }, 1000)
                        }, binding.value.delay)
                    }
                    setTimeout(() => {
                    return (binding.arg === 'background') ? ((el.style.backgroundColor = binding.value) && (el.style.color = 'white')) : (el.style.color = binding.value);
                    }, delay)
                }
            },

            'custom-on': {
                bind: function(el, binding, vnode) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },

        data() {
            return {
                inputText: '',
                isClicked: false,
                count: 0,
                isMouseEnter: false,
                mouseEnterCount: 0,
                isMouseLeave: false,
            }
        },

        methods: {
            clicked() {
                this.isClicked = true;
                this.count += 1;
            },

            clickedText() {
                let result = (this.count === 1) ? this.count + ' time!' : this.count + ' times!';
                return this.isClicked ? 'You clicked me ' + result : 'Not Clicked';
            },

            mouseEnterText() {
                return this.isMouseEnter ? 'Why are you hovering? You have hovered ' + this.mouseEnterCount + ' times' : '';
            },

            mouseEnterFunc() {
                this.isMouseEnter = true;
                this.isMouseLeave = false;
                this.mouseEnterCount += 1;
            },

            mouseLeaveFunc() {
                this.isMouseLeave = true;
                this.isMouseEnter = false;
            }, 

            mouseLeaveText() {
                return this.isMouseLeave ? 'Don\'t goooo!' : '';
            },

            finalText() {
                return this.isMouseEnter ? this.mouseEnterText() : this.mouseLeaveText();
            }
        }
    }
</script>

<style>

</style>
