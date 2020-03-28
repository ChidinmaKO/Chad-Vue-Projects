<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="slide" appear>
                    <h1>Animations</h1>
                </transition>

                <hr>

                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>

                <hr>

                <button class="btn btn-primary" @click="show = !show">Show Alert</button>

                <br><br>

                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <br><br>

                <transition :name="alertAnimation" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <br><br>

                <transition 
                    :name="alertAnimation" 
                    type="animation" 
                    mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>

                <br><br>

                <transition 
                    enter-active-class="animated heartBeat"
                    leave-active-class="animated jello">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>

                <hr>

                <button class="btn btn-primary" @click="load=!load">Load/Remove Element</button>

                <br><br>

                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div class="box-style" v-if="load"></div>
                </transition>

                <hr>
                <button class="btn btn-primary" @click="checkSelected">
                    Toggle Components
                </button>

                <br><br>

                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>

                <hr>

                <button class="btn btn-primary" @click="addItem">Add Item</button>

                <br><br>

                <ul class="list-group">
                    <transition-group 
                        tag="div" 
                        name="slide"
                        type="animation"
                    >
                        <li 
                            class="list-group-item" 
                            v-for="(number, index) in numbers" 
                            :key="number"
                            @click="removeItem(index)"
                            style="cusor: pointer"
                        >
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
                <br><br>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        },

        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 120,
                selectedComponent: 'appDangerAlert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 120;
                el.style.width = this.elementWidth + 'px';
            },

            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },

            afterEnter(el) {
                console.log('afterEnter');
            },

            enterCancelled(el) {
                console.log('enterCancelled');
            },

            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },

            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },

            afterLeave(el) {
                console.log('afterLeave');
            },

            leaveCancelled(el) {
                console.log('leaveCancelled');
            },

            checkSelected() {
                this.selectedComponent = this.selectedComponent === 'appDangerAlert' ? 'appSuccessAlert' : 'appDangerAlert';
                return this.selectedComponent;
            },

            addItem () {
                const pos = Math.floor ( Math.random() * this.numbers.length);   
                this.numbers.splice( pos , 0 , Math.max(... this.numbers) + 1 );    
            },

            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
    }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 2s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateX(20px);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-20px);
        }
    }

    .box-style {
        width: 300px; 
        height: 120px; 
        background: #0f0c29;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

</style>
