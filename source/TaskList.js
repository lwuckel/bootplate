enyo.kind({
	name: "TaskList",
	kind: "FittableRows", 
	fit:true, 
	components: [{
		name: "gList",
		kind: "GTaskList"
		},
    {   
          name: "appList", 
          kind: "List", 
          count:0, 
          touch:true, 
          onSetupItem: "setupItem", 
          components: [
              {
                  name: "listItem", 
                  classes:'listItemContainer', 
                  ontap:'listItemTapped', 
                  components: [
                      {
                        name: "itemTitle",  
                        content:"Set Title..."
                      }
                  ]
              }
          ]
      },
	],
		
	create: function(){
		this.inherited(arguments);
		this.data = this.$.gList.getAllLists();
		this.$.appList.setCount(this.data.length);
	},
		
	setupItem:function(inSender,inEvent) {
	 this.childName = this.data[inEvent.index].name; 
	 this.$.itemTitle.setContent(this.childName);
	}
});
