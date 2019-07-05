import {observable, action, computed, runInAction} from "mobx";

class EventStore{
   @observable events =[];
   offset=0;
   limit=20;

   @action
   fetchEvents= ()=>{
       //I'm constructing the URL and offset manually instead of relying on the URL in the JSON
       const url='http://api.my-events.site/api/v1/events/?limit='+this.limit+'&offset='+this.offset;
       fetch(url).then((response)=>response.json())
           .then((eventsObject)=>{
               runInAction(()=>{
                   this.events=[...this.events,...eventsObject.results];
               });
               this.offset+=this.limit;
           }).catch((error)=>{
                //TODO: Handle the error
       })


   }

   @action
   clearEvents=()=>{
       this.events=[];
       this.offset=0;
   }

   @computed get eventCount(){
       return this.events.length
    }
}

const store = new EventStore();
export default store