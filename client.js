if (Meteor.is_client) {

  $("#btnAddResource").live('click', function () {
  	Resources.insert({
  		name: $("#newname").val(),
  		description: $("#newdescription").val(),
  		url: $("#newurl").val(),
  		category: $("#newfor").val(),
  		timestamp: Date.now()
  	});
  });

  $("#addnewcategory").live('click', function (event) {
  	event.preventDefault();
  	event.stopPropagation();
  	Categories.insert({name: $('#newcategoryname').val()});
  	$('#newcategoryname').val('');
  });

	Template.webresource.categories = Categories.find();

	Template.category.events = {
		'click .add_resource': function (event) {
	    $("#newname").val('');
  	  $("#newdescription").val('');
    	$("#newdescription").html('');
    	$("#newurl").val('');
			$("#newfor").val(this._id);
		}
	}

	Template.category.resources = function () {
		return Resources.find({category: this._id});
	};

	Template.category.child_count = function () {
		return Resources.find({category: this._id}).count();
	};
}