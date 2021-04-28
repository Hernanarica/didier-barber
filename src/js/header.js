Vue.component('px-header', {
   template: /* html */
      `
    <div>
         <div class="wrapper Tablet:flex Tablet:justify-between">
            <div class="px-4 py-1 flex items-center justify-between">
               <div>
                  <a href="#"><img src="./src/assets/img/logo.svg" alt="javier barber" class="h-12" /></a>
               </div>
               <div class="Tablet:hidden flex items-center text-gold-100">
                  <button class="focus:outline-none " @click="isOpen = !isOpen">
                  <svg class="fill-current h-5" v-if="isOpen" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 30.5 26" style="enable-background:new 0 0 30.5 26;" xml:space="preserve">
                     <style type="text/css">
                        .st0{fill:#D6A354;}
                     </style>
                     <polygon class="st0" points="0.7,0.2 0.7,4.9 26.7,4.9 29.7,0.2 "/>
                     <polygon class="st0" points="0.7,10.6 0.7,15.4 22.1,15.4 25.1,10.6 "/>
                     <polygon class="st0" points="0.7,21.1 0.7,25.7 17.5,25.7 20.6,21.1 "/>
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" class="h-8" v-else>
                     <path
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                     ></path>
                  </svg>
                  </button>
               </div>
            </div>
            <nav id="menu" :class="isOpen ? 'hidden' : 'block'" class="px-4 py-3 Tablet:block">
               <ul class="text-gold-100 space-y-1 Tablet:space-y-0 Tablet:flex Tablet:items-center Tablet:space-x-3 font-medium">
                  <li class="hover:bg-darkLight-100 rounded Tablet:hover:bg-transparent Tablet:rounded-none Tablet:duration-300 Tablet:border-transparent Tablet:border-b-2 Tablet:hover:border-gold-100"><a href="#" class="block cursor-pointer px-2 py-1"><a href="#inicio" class="block cursor-pointer px-2 py-1">Inicio</a></li>
                  <li class="hover:bg-darkLight-100 rounded Tablet:hover:bg-transparent Tablet:rounded-none Tablet:duration-300 Tablet:border-transparent Tablet:border-b-2 Tablet:hover:border-gold-100"><a href="#" class="block cursor-pointer px-2 py-1"><a href="#quienSoy" class="block cursor-pointer px-2 py-1">Quién soy</a></li>
                  <li class="hover:bg-darkLight-100 rounded Tablet:hover:bg-transparent Tablet:rounded-none Tablet:duration-300 Tablet:border-transparent Tablet:border-b-2 Tablet:hover:border-gold-100"><a href="#" class="block cursor-pointer px-2 py-1"><a href="#conocimientos" class="block cursor-pointer px-2 py-1">Conocimientos</a></li>
                  <li class="hover:bg-darkLight-100 rounded Tablet:hover:bg-transparent Tablet:rounded-none Tablet:duration-300 Tablet:border-transparent Tablet:border-b-2 Tablet:hover:border-gold-100"><a href="#" class="block cursor-pointer px-2 py-1"><a href="#trabajos" class="block cursor-pointer px-2 py-1">Trabajos</a></li>
                  <li class="hover:bg-darkLight-100 rounded Tablet:hover:bg-transparent Tablet:rounded-none Tablet:duration-300 Tablet:border-transparent Tablet:border-b-2 Tablet:hover:border-gold-100"><a href="#" class="block cursor-pointer px-2 py-1"><a href="#contacto" class="block cursor-pointer px-2 py-1">Contacto</a></li>
               </ul>
            </nav>
         </div>
      </div>
    `,
   data() {
      return {
         isOpen: true,
         isOpenSub: false,
      }
   },
});