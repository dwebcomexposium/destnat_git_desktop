$(document).ready(function(){
	// HOME BLOC DESTINATION -> Changement d'URL sur le SELECT
	$('#select_destination').on('change', function () {
		var url = $(this).val(); // Récupérer la valeur sélectionnée
		if (url) { // vérif non vide
		  	window.location = url; // redirection
		}
		return false;
	});
});