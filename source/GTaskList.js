enyo.kind({
	name: "GTaskList",
	kind: enyo.Component,
	
	/** @protected */
	create: function() {
		this.inherited(arguments);
	},
		
	getAllLists: function(){
		return [
        { name:"@Home"},
        { name:"@Work"},
        { name:"@Shop"},
        { name:"#Reading"},
        { name:"#Writing"},
        { name:"#Buying"},
        { name:"#Searching"}];
	}
});
