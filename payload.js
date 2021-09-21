class Payload {
     constructor (plain,key){
          if (plain != "")
               this.plain = plain
          else 
               this.plain = "default"
          if (key!="")
               this.key = key
          else 
               this.key = KEY
          this.cipher = ""
          this.sig = ""
     }
     signature(){
          return this.sig
     }
     cipher(){
          return this.cipher
     }
     plain(){
          return this.plain
     }
}