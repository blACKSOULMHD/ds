class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return null;
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            while(prev.next!=null){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size++
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr!=null){
          let next=curr.next
          curr.next=prev
          prev=curr
          curr=next
        }
        this.head=prev
      }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr=this.head
            let listValues=''
            while(curr!=null){
                listValues+=`${curr.value}`
                curr=curr.next
            }
            console.log(listValues);
        }
    }
}
const list=new LinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.reverse()
list.print()

