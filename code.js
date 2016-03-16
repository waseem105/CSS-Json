
function getAjax(url, dataz) {
	console.log(' calling ' + url);
	var jsonobj;

	$.ajax({
		type : 'GET',
		url : url,
		async : false,
		jsonpCallback : 'jsonCallback',
		contentType : "application/json",
		dataType : 'jsonp',
		data : dataz, // multiple data sent using ajax
		success : function (json) {
			console.log(json);
			jsonobj = json;

		},
		error : function (e) {
			console.log(e.message);
		}
	});

	return jsonobj









//T1
// table  - descrition + price
function getJsonTemplateTables(currLiv, tInstanceId) {

	//alert('tables')
	var templateclientQSSettings = '&templateInstanceId=' + tInstanceId + '&templateClientKey=' + clientkey;
	var url = urlsvr + 'JsonTemplateTables.aspx?callback=?';
	console.log('curr live: ' + currLiv);
	var dataz = 'fis=' + currLiv + '&templateid=1' + templateclientQSSettings;
	var TemplateBGFXon = 0;
	var templateFXObj;
	var TemplateZone;
	var jsonobj = getAjax(url, dataz)

		var templateSettinsObj = jsonobj.TemplateSettings[0];
	var templateDataObj = jsonobj.TemplateData;
	templateFXObj = jsonobj.TemplateFX[0]; // no need to var it
	var templateCSS = templateSettinsObj.theme;
	var TemplateBGMediaType = templateSettinsObj.bgmediatype; // json.TemplateBGMediaType;
	var TemplateBGMediaSource = templateSettinsObj.bgmediasource; // json.TemplateBGMediasource;
	TemplateBGFXon = templateSettinsObj.fxOn; //json.TemplateBGFXon; // ** no need to var this **
	TemplateZone = templateSettinsObj.zone; // zone to add element

		$('#' + TemplateZone).empty();
	ProcessMediaType(TemplateBGMediaType, TemplateBGMediaSource, '#' + TemplateZone);

	$.each(templateDataObj, function (tblIndex, tblgroup) {

		var tblIdx = TemplateZone + '_t' + tblIndex

			//$('#' + TemplateZone).append('<div> <h1>' +tblgroup.Description +' </h1>');
			$('#' + TemplateZone).append('<table   id="' + tblIdx + '"></table>');
		//$('#' + TemplateZone).append('</div>');

		var table = $('#' + tblIdx);

		$('#' + TemplateZone).addClass('features-table');
		$('#' + TemplateZone).addClass(templateCSS);

		table.append('<thead><tr id="' + 'subHeadTR_' + tblIdx + '"></tr></thead>');
		var subHeadTR = $('#subHeadTR_' + tblIdx);

		switch (tblgroup.Config) {
		case "1":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>');
			break;

		case "2":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>' + '<td>' + tblgroup.Subheading2 + '</td>');
			break;

		case "3":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>' + '<td>' + tblgroup.Subheading2 + '</td>' + '<td>' + tblgroup.Subheading3 + '</td>');
			break;

		case "4":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>' + '<td>' + tblgroup.Subheading2 + '</td>' + '<td>' + tblgroup.Subheading3 + '</td>' + '<td>' + tblgroup.Subheading4 + '</td>');
			break;

		case "5":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>' + '<td>' + tblgroup.Subheading2 + '</td>' + '<td>' + tblgroup.Subheading3 + '</td>' + '<td>' + tblgroup.Subheading4 + '</td>' + '<td>' + tblgroup.Subheading5 + '</td>');
			break;

		case "6":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>' + '<td>' + tblgroup.Subheading2 + '</td>' + '<td>' + tblgroup.Subheading3 + '</td>' + '<td>' + tblgroup.Subheading4 + '</td>' + '<td>' + tblgroup.Subheading5 + '</td>' + '<td>' + tblgroup.Subheading6 + '</td>');
			break;

		case "7":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>' + '<td>' + tblgroup.Subheading2 + '</td>' + '<td>' + tblgroup.Subheading3 + '</td>' + '<td>' + tblgroup.Subheading4 + '</td>' + '<td>' + tblgroup.Subheading5 + '</td>' + '<td>' + tblgroup.Subheading6 + '</td>' + '<td>' + tblgroup.Subheading7 + '</td>');
			break;

		case "8":
			subHeadTR.append('<td>' + tblgroup.Subheading1 + '</td>' + '<td>' + tblgroup.Subheading2 + '</td>' + '<td>' + tblgroup.Subheading3 + '</td>' + '<td>' + tblgroup.Subheading4 + '</td>' + '<td>' + tblgroup.Subheading5 + '</td>' + '<td>' + tblgroup.Subheading6 + '</td>' + '<td>' + tblgroup.Subheading7 + '</td>' + '<td>' + tblgroup.Subheading8 + '</td>');
			break;

		default:
			subHeadTR.append('<td>config (tbl Col unknown)</td>');
		}

		//alert(tblgroup.Config);
		$.each(tblgroup.MenuItems, function (key2, menuitems) {

			var table = $('#' + tblIdx);
			table.append('<tr id="tblDataTR_' + tblIdx + '_' + key2 + '"></tr>');
			var tblDataTR = $('#tblDataTR_' + tblIdx + '_' + key2);
			tblDataTR.append('<td>' + menuitems.Field1 + '<span class="tabledescriptiontag">' + menuitems.Description + '</span> </td>');

			switch (tblgroup.Config) {
			case "-100":
				//tblDataTR.append('<td>' + menuitems.Field1 + '<span class="tabledescriptiontag">' + menuitems.Description + '</span> </td>');
				break;

			case "2":
				//tblDataTR.append('<td>' + menuitems.Field1 + '</td>' + '<td>' + menuitems.Field2 + '</td>');
				tblDataTR.append('<td>' + menuitems.Field2 + '</td>');
				break;

			case "3":
				//tblDataTR.append('<td>' + menuitems.Field1 + '</td>' + '<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>');
				tblDataTR.append('<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>');
				break;

			case "4":
				//tblDataTR.append('<td>' + menuitems.Field1 + '</td>' + '<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>' + '<td>' + menuitems.Field4 + '</td>');
				tblDataTR.append('<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>' + '<td>' + menuitems.Field4 + '</td>');
				break;

			case "5":
				tblDataTR.append('<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>' + '<td>' + menuitems.Field4 + '</td>' + '<td>' + menuitems.Field5 + '</td>');
				break;

			case "6":
				tblDataTR.append('<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>' + '<td>' + menuitems.Field4 + '</td>' + '<td>' + menuitems.Field5 + '</td>' + '<td>' + menuitems.Field6 + '</td>');
				break;

			case "7":
				tblDataTR.append('<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>' + '<td>' + menuitems.Field4 + '</td>' + '<td>' + menuitems.Field5 + '</td>' + '<td>' + menuitems.Field6 + '</td>' + '<td>' + menuitems.Field7 + '</td>');
				break;

			case "8":
				tblDataTR.append('<td>' + menuitems.Field2 + '</td>' + '<td>' + menuitems.Field3 + '</td>' + '<td>' + menuitems.Field4 + '</td>' + '<td>' + menuitems.Field5 + '</td>' + '<td>' + menuitems.Field6 + '</td>' + '<td>' + menuitems.Field7 + '</td>' + '<td>' + menuitems.Field8 + '</td>');
				break;

			default:
				tblDataTR.append('<td>config (tbl Col unknown)</td>');

			}

		})
	})

	if (TemplateBGFXon == 1) {

		delete templateFXObj["templatesetting_idtemplatesetting"];

		//templateFXObj['width']="96%";
		//templateFXObj['slideResize']=1;
		//templateFXObj['containerResize']=1;
		//templateFXObj['fit']=1;
		//templateFXObj['slideExpr']='table';
		//alert('cycle   ' + '#' + TemplateZone);

		console.log(templateFXObj);
		$('#' + TemplateZone).cycle(templateFXObj);
		//$('#' + TemplateZone).cycle({ slideExpr: 'table' });
	}

}