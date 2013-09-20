enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[{
		kind: "Panels"
		, classes:"enyo-fit"
        , arrangerKind: "CollapsingArranger"
        , components: [
            {kind:"Panels", name:"listPanels"
             , classes:"onyx todos-panels"
             , arrangerKind:"CarouselArranger"
             , components: [
                {kind:"FittableRows"
                 , components: [
					{kind: "onyx.Toolbar"
					, layoutKind:"FittableColumnsLayout"
                     , components: [{content:"Aufgaben", fit:true},
					{name: "list", kind: "TaskList"}]
				}
				]
			}]
		}
		]}
	]
});
