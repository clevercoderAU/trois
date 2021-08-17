import { defineComponent } from 'vue'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Model from './Model'

export default defineComponent({
  extends: Model,
  created() {
    const loader = new GLTFLoader()
    loader.load(this.src, (gltf) => {
      this.onLoad(gltf.scene)
      console.log("Console message")
    }, this.onProgress, this.onError)
  },
})
