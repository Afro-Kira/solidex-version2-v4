function fun(nom,value)
{

   
    if(nom=='frequence_paie')
    {
        if(value=='') 
        {
            document.getElementById(nom).style.border='red 2px solid';
            frequence_paie=false;
        }
        else
        {
            document.getElementById(nom).style.border='green 2px solid';
            frequence_paie=true; 
        }
    }



    if(nom=='marge')
    {
        if(value=='') 
        {
            document.getElementById(nom).style.border='red 2px solid';
            frequence_paie=false;
        }
        else
        {
            document.getElementById(nom).style.border='green 2px solid';
            frequence_paie=true; 
        }

    }
        
    
    if(nom=='banque')
    {
        
        if(value=='') 
        {
            document.getElementById(nom).style.border='red 2px solid';
            banque=false;
            document.querySelector('#autres').innerHTML=''
        }
        else if(value=='Autres')
        { 
            document.querySelector('#autres').innerHTML='<div class="form-group col-md-12  mt-2"><label for="autre_banque">Quel est le nom de votre Banque*</label><input type="text" class="form-control" name="autre_banque" id="autre_banque" placeholder="" onblur="mev(this.id)"></div>'
            document.getElementById(nom).style.border='green 2px solid';
            banque=false;

        }
        else
        {
            document.getElementById(nom).style.border='green 2px solid';
             banque=true;
            document.querySelector('#autres').innerHTML='';
        }
        
    }



    if(nom=='province')
    {
        
            if(value=='') 
                document.getElementById(nom).style.border='red 2px solid';
            else
                document.getElementById(nom).style.border='green 2px solid';
            
    }
    if(nom=='proprietaire')
    {
        if(value=='oui')
        {
            document.querySelector('#apparition').innerHTML='<div class="form-group col-md-12  mt-2"><label for="paiment_hypo">Quel est le montant de vos paiements d\'hypotheque*</label><input type="number" class="form-control" name="paiment_hypo" id="paiment_hypo" placeholder="" onblur="mev(this.id)"></div>';
            document.getElementById(nom).style.border='green 2px solid';
        }
        else if(value=='non') 
        {   
            document.querySelector('#apparition').innerHTML='<div class="form-group col-md-12  mt-2"><label for="paiment_loyer">A combien s\'élève vos  paiements de loyer *</label><input type="number" class="form-control" name="paiment_loyer" id="paiment_loyer" placeholder="" onblur="mev(this.id)"></div>';
            document.getElementById(nom).style.border='green 2px solid';
        }
        else if(value=='') 
        {   
            document.querySelector('#apparition').innerHTML=''
            document.getElementById(nom).style.border='red 2px solid';
        }
   
    }
    if(nom=='situation_maritale')
    {
        
        if(value=='marié')
        {
            document.querySelector('#aff_dure_anne').innerHTML='<div class="form-group col-md-4  mt-2"><label for="dure_anne">Duré en Annéé</label><input type="number" class="form-control" name="dure_anne" id="dure_anne" placeholder=""  onblur="mev(this.id)"></div><div class="form-group col-md-4  mt-2"><label for="dure_mois">Duré en mois</label><input type="number" class="form-control" name="dure_mois" id="dure_mois" placeholder=""  onblur="mev(this.id)"></div>';
            document.getElementById(nom).style.border='green 2px solid';
        }
        else
        {document.querySelector('#aff_dure_anne').innerHTML='';
        document.getElementById(nom).style.border='red 2px solid';
        }

     }

     if(nom=='lien')
     {
         if(value=='')
         {
            document.querySelector('#aff_lien').innerHTML='';
            document.getElementById(nom).style.border='red 2px solid'; 
            lien=false;
         }
         else if(value=='8')
         {
            document.querySelector('#aff_lien').innerHTML='<div class="form-group col-md-3 mt-2"><label for="lien_autre">Le Quel*</label><input type="text" class="form-control" name="lien_autre" id="lien_autre" placeholder=""></div>';
            document.getElementById(nom).style.border='green 2px solid';  
            lien=false;
         }
         else
         {
            document.querySelector('#aff_lien').innerHTML='';
            document.getElementById(nom).style.border='green 2px solid'; 
            lien=true;
         }
     }

     if(nom=='statut')
     {
        if(value=='')
        {
           document.getElementById(nom).style.border='red 2px solid'; 
           statut=false;
        }
        else
         {
           
            document.getElementById(nom).style.border='green 2px solid'; 
            statut=true;
         }
     }



}



function retablir(nom)
{
    if(nom=='faillite2non')

    { 
         if(document.getElementById(nom).checked)   
         {
            faillite2=true;
            document.querySelector('#aff_declarer').innerHTML='';
        }
    }

    if(nom=='faillite2oui')
    { 
         if(document.getElementById(nom).checked) 

        {     
            document.querySelector('#aff_declarer').innerHTML='<div class="form-group col-md-7 mt-2 row" ><label for="banque" class="">Le quel avez-vous déclarer*</label><div class="row col-md-8"><div class="form-check ml-4 col-md-12"><input class="form-check-input" type="radio" name="declaration" id="faille" value="faille" onclick="retablir(this.id)"  onblur="mev(this.id)"><label class="form-check-label" for="non">faillite</label> </div><div class="form-check ml- col-md-12"><input class="form-check-input" type="radio" name="declaration" id="propoconsomateur" value="propoconsomateur"  onclick="retablir(this.id)"><label class="form-check-label" for="oui">proposition au consommateur*</label></div><div class="form-check ml-4 col-md-12"><input class="form-check-input" type="radio" name="declaration" id="depotvolontaire" value="depotvolontaire"  onclick="retablir(this.id)"><label class="form-check-label" for="oui"> depot volontaire</label></div></div></div><div class="form-group col-md-5  mt-2"><label for="ville">date de libération*</label><input type="Text" class="form-control" name="dateliberation" id="dateliberation" placeholder="d/m/y" onblur="mev(this.id)"></div>'; 
            
        }
            
    }
    if(nom=='faillitenon') 
    {
            if(document.getElementById(nom).checked)
            {   
               faillite=true;
            }
           
    }
    if(nom=='failliteoui') 
    {
            if(document.getElementById(nom).checked)
            {   
               faillite=true;
            }
           
    }
    
    if(nom=='propoconsomateur' || nom=='faille' || nom=='depotvolontaire')
    {       if(document.getElementById(nom).checked)
            {
                faille=true;
                propoconsomateur=true;
                depotvolontaire=true;
            }
    }


    if(nom=='contracteroui')
    {
        if(document.getElementById(nom).checked)
        {
            document.querySelector('#aff_prets').innerHTML='<div class="form-group col-md-8 mt-2"><label for="etablissement_preteur">Quel le nom de l\'etablissement prêteur*</label><input type="text" class="form-control" name="etablissement_preteur" id="etablissement_preteur" onblur="mev(this.id)"></div><div class="form-group col-md-8 mt-2"><label for="mensualite">Quel est le montant des mensualités a payer*</label><input type="number" class="form-control" name="mensualite" id="mensualite" onblur="mev(this.id)"></div>'
            contracter=false;
        }
    }

    if(nom=='contracternon')
    {
        if(document.getElementById(nom).checked)
        {
            document.querySelector('#aff_prets').innerHTML='';
            contracter=true;
        }
    }
    
}



function mev(nom_controle)
{

                var longueur= document.getElementById(nom_controle).value.length;
                if(longueur<1)
                {

                    document.getElementById(nom_controle).style.border='red 2px solid';
                   
                    switch (nom_controle) 
                    {
                        
                        case 'prenom':
                            b_prenom=false;
                            break;
                        case 'nom':
                            b_nom=false;
                            break;
                        case 'date':
                            b_date=false;
                            break;
                        case 'cellulaire':
                            b_cellulaire=false;
                            break;
                    }
                }
                else
                {
                        
                        switch (nom_controle) 
                        {
                            case 'prenom':
                                b_prenom=true;
                                document.getElementById(nom_controle).style.border='green 2px solid';
                                break;
                            case 'nom':
                                b_nom=true;
                                document.getElementById(nom_controle).style.border='green 2px solid';
                                break;

                            case 'date':
                                if(!isValidDate( document.getElementById(nom_controle).value,'DMY'))
                                {
                                    document.getElementById(nom_controle).style.border='red 2px solid';
                                    document.querySelector('#small1').innerHTML='remplisser correctement';
                                    b_date=false;
                                }
                                else
                                {
                                    document.getElementById(nom_controle).style.border='green 2px solid';
                                    document.querySelector('#small1').innerHTML='';
                                    b_date=true;
                                }
                                break;

                            case 'Cellulaire':
                                if(!validatnum(nom_controle))
                                    b_cellulaire=false;
                                else
                                    b_cellulaire=true;
                                break;

                            case 'mail':
                                if(!validationMail(nom_controle))
                                    b_mail=false;
                                else
                                    b_mail=true;
                                break;

                            case 'tel':
                                if(!validatnum(nom_controle))
                                    tel=false;
                                else
                                    tel=true;
                                break;

                            case 'genre':
                                if(!document.getElementById(nom_controle).value=='homme' && !document.getElementById(nom_controle).value=='femme')
                                   { genre=false;
                                    document.getElementById(nom_controle).style.border='red 2px solid';
                                   }
                                        
                                else
                                    genre=true; 
                            break;



                            case 'numero_sociale':
                                if(validasocial(nom_controle))
                                {
                                   if(document.getElementById(nom_controle).value=='' || document.getElementById(nom_controle).value.split(" ").join("").length <9 )
                                   {
                                    
                                    document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    numero_sociale=false;
                                   }
                                else{
                                    document.getElementById(nom_controle).style.border='green 2px solid'; 
                                    numero_sociale=true;
                                }
                            }
                                break;
                                

                            case 'dure_anne':
                                if(document.getElementById(nom_controle).value=='')
                                {   document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    dure=false;
                                }
                                else
                                {
                                    document.getElementById(nom_controle).style.border='green 2px solid'; 
                                    dure=true;
                                }
                            
                            break;

                            case 'dure_mois':
                                if(document.getElementById(nom_controle).value=='')
                                {   document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    mois=false;
                                }
                                else
                                {
                                    mois=true;
                                    document.getElementById(nom_controle).style.border='green 2px solid'; 
                                }
                            break;
                            
                            case 'adresse':
                                if(document.getElementById(nom_controle).value==''|| document.getElementById(nom_controle).value.length<3)
                                {   
                                    document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    adresse=false;

                                } 
                                else
                                {   
                                    document.getElementById(nom_controle).style.border='green 2px solid'; 
                                    adresse=true;

                                }
                            break;
                            
                            case 'ville':
                                if(document.getElementById(nom_controle).value==''|| document.getElementById(nom_controle).value.length<4)
                                {   
                                    document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    ville=false;

                                } 
                                else
                                {   
                                    document.getElementById(nom_controle).style.border='green 2px solid'; 
                                    ville=true;

                                }
                            break;
                            
                            case 'cpost':
                                if(validationcodepost(nom_controle))
                                {
                                   if(document.getElementById(nom_controle).value=='' || document.getElementById(nom_controle).value.split(" ").join("").length <=6 )
                                   {
                                    
                                    document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    numero_sociale=false;
                                   }
                                    else
                                    {
                                        document.getElementById(nom_controle).style.border='green 2px solid'; 
                                        numero_sociale=true;
                                    }
   
                              }
                             break;

                           

                            case 'paiement_loyer':
                                if(document.getElementById(nom_controle).value=='')
                                {   document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    loyer=true;
                                }
                                else
                                {
                                    document.getElementById(nom_controle).style.border='green 2px solid'; 
                                    loyer=true;
                                }
                            break;

                            case 'paiment_hypo':
                                if(document.getElementById(nom_controle).value=='')
                                {   document.getElementById(nom_controle).style.border='red 2px solid'; 
                                    hypotheque=false;
                                }
                                else
                                {
                                    hypotheque=true;
                                    document.getElementById(nom_controle).style.border='green 2px solid'; 
                                }
                            break;

                            case 'dateliberation':
                                if(!document.getElementById(nom_controle).value=='' && isValidDate(document.getElementById(nom_controle).value,'DMY') )
                                     {
                                        dateliberation=true;
                                        document.getElementById(nom_controle).style.border='green 2px solid';
                                    } 
                                else
                                { 
                                    dateliberation=false;
                                    document.getElementById(nom_controle).style.border='red 2px solid'; 
                                }
                            break;

                            case 'but_du_financement':
                                if(document.getElementById(nom_controle).value=='' || document.getElementById(nom_controle).value.split(" ").join("").length <=7 )
                                {
                                 
                                 document.getElementById(nom_controle).style.border='red 2px solid'; 
                                 but_du_financement=false;
                                }
                                 else
                                 {
                                     document.getElementById(nom_controle).style.border='green 2px solid'; 
                                     but_du_financement=true;
                                 }
                            break;

                            case 'montant_desirer':
                                if(document.getElementById(nom_controle).value=='' || document.getElementById(nom_controle).value<1000 )
                                {
                                 
                                 document.getElementById(nom_controle).style.border='red 2px solid'; 
                                 montant_desirer=false;
                                }
                                 else
                                 {
                                     document.getElementById(nom_controle).style.border='green 2px solid'; 
                                     montant_desirer=true;
                                 }
                            break;
                            
                            case 'dure_pret':
                                if(document.getElementById(nom_controle).value=='' || document.getElementById(nom_controle).value<1 )
                                {
                                 
                                 document.getElementById(nom_controle).style.border='red 2px solid'; 
                                 dure_pret=false;
                                }
                                 else
                                 {
                                     document.getElementById(nom_controle).style.border='green 2px solid'; 
                                     dure_pret=true;
                                 }
                            break;

                            case 'autre_banque':
                                if(document.getElementById(nom_controle).value=='' )
                                {
                                 
                                 document.getElementById(nom_controle).style.border='red 2px solid'; 
                                 banque=false;
                                }
                                 else
                                 {
                                     document.getElementById(nom_controle).style.border='green 2px solid'; 
                                     banque=true;
                                 }

                            break;

                        
                            case 'depotdate':
                                if(document.getElementById(nom_controle).value=='' || !isValidDate(document.getElementById(nom_controle).value,'DMY')  )
                                {
                                 
                                 document.getElementById(nom_controle).style.border='red 2px solid'; 
                                 banque=false;
                                }
                                 else
                                 {
                                     document.getElementById(nom_controle).style.border='green 2px solid'; 
                                     banque=true;
                                 }

                            break;

                            case 'etablissement_preteur':
                                if(document.getElementById(nom_controle).value=='')
                                {
                                 
                                 document.getElementById(nom_controle).style.border='red 2px solid'; 
                                 etablissement_preteur=false;
                                }
                                 else
                                 {
                                     document.getElementById(nom_controle).style.border='green 2px solid'; 
                                     etablissement_preteur=true;
                                 }

                            break;

                            case 'mensualite':
                                if(document.getElementById(nom_controle).value=='')
                                {
                                 
                                 document.getElementById(nom_controle).style.border='red 2px solid'; 
                                 mensualite=false;
                                }
                                 else
                                 {
                                     document.getElementById(nom_controle).style.border='green 2px solid'; 
                                     mensualite=true;
                                 }

                            break;

                            case 'prenomparent':
                                if(!document.getElementById(nom_controle).value=='')
                                {
                                    prenomparent=true;
                                    document.getElementById(nom_controle).style.border='green 2px solid';
                                }
                                else
                                {
                                    prenomparent=false;
                                    document.getElementById(nom_controle).style.border='red 2px solid';
                                }
                                break;
                            case 'nomparent':
                                if(!document.getElementById(nom_controle).value=='')
                                {
                                    nomparent=true;
                                    document.getElementById(nom_controle).style.border='green 2px solid';
                                }
                                else
                                {
                                    nomparent=false;
                                    document.getElementById(nom_controle).style.border='red 2px solid';
                                }
                                break;

                            

                            case 'lien_autre':
                                if(!document.getElementById(nom_controle).value=='')
                                {
                                    lien_autre=true;
                                    document.getElementById(nom_controle).style.border='green 2px solid';
                                }
                                else
                                {
                                    lien_autre=false;
                                    document.getElementById(nom_controle).style.border='red 2px solid';
                                }
                                break;
                            case 'pays_naissance':
                                if(!document.getElementById(nom_controle).value=='')
                                {
                                    pays_naissance=true;
                                    document.getElementById(nom_controle).style.border='green 2px solid';
                                }
                                else
                                {
                                    pays_naissance=false;
                                    document.getElementById(nom_controle).style.border='red 2px solid';
                                }
                                break;    

                            case 'de_nous':
                                if(!document.getElementById(nom_controle).value=='')
                                {
                                    de_nous=true;
                                    document.getElementById(nom_controle).style.border='green 2px solid';
                                }
                                else
                                {
                                    de_nous=false;
                                    document.getElementById(nom_controle).style.border='red 2px solid';
                                }
                                break;






                        }
                    if(dure==true && mois ==true) 
                        situation_maritale=true;
                        
                     
                     if(loyer==true || hypotheque==true)
                        proprietaire=true;
                    
                        
                        if(faille==true || propoconsomateur==true || depotvolontaire==true )
                            if(  dateliberation==true )
                                faillite2=true;

                        if( mensualite==true && etablissement_preteur==true)
                            contracter=true;


                        if (nom_controle=='numeroparent')
                           {   
                                 if(!validatnum(nom_controle))
                                {   
                                    numeroparent=false;
                                   
                                }
                                else
                                {   
                                     numeroparent=true;
                                   
                                }
                            }


                }

}




function validationMail(mail)
{
var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

if (expressionReguliere.test(document.getElementById(mail).value))
{

document.getElementById(mail).style.border='green 2px solid';
}
else
{

document.getElementById(mail).style.border='red 2px solid';
}
return false;
}



function validationcodepost(mail)
{
var expressionReguliere =/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

if (expressionReguliere.test(document.getElementById(mail).value))
{

document.getElementById(mail).style.border='green 2px solid';
}
else
{

document.getElementById(mail).style.border='red 2px solid';
}
return false;
}


function validatnum(mail)
{
var expressionReguliere =/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/;

if (expressionReguliere.test(document.getElementById(mail).value))
{

document.getElementById(mail).style.border='green 2px solid';
}
else
{

document.getElementById(mail).style.border='red 2px solid';
}
return false;
}


function validasocial(mail)
{
var expressionReguliere = /^[0-9]+$/;

if (expressionReguliere.test(document.getElementById(mail).value))
{

document.getElementById(mail).style.border='green 2px solid';
}
else
{

document.getElementById(mail).style.border='red 2px solid';
}
return false;
}


function isValidDate(dateStr, format) {
  if (format == null) { format = "MDY"; }
  format = format.toUpperCase();
  if (format.length != 3) { format = "MDY"; }
  if ( (format.indexOf("M") == -1) || (format.indexOf("D") == -1) || (format.indexOf("Y") == -1) ) { format = "MDY"; }
  if (format.substring(0, 1) == "Y") { 
	 var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
	 var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
  } else if (format.substring(1, 2) == "Y") { 
	 var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
	 var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
  } else { 
	 var reg1 = /^\d{1,2}(\/)\d{1,2}\1\d{2}$/
	 var reg2 = /^\d{1,2}(\/)\d{1,2}\1\d{4}$/
  }
  
  if ( (reg1.test(dateStr) == false) && (reg2.test(dateStr) == false) ) { return false; }
  var parts = dateStr.split(RegExp.$1); 
  
  if (format.substring(0, 1) == "M") { var mm = parts[0]; } else
	 if (format.substring(1, 2) == "M") { var mm = parts[1]; } else { var mm = parts[2]; }
  if (format.substring(0, 1) == "D") { var dd = parts[0]; } else
	 if (format.substring(1, 2) == "D") { var dd = parts[1]; } else { var dd = parts[2]; }
  if (format.substring(0, 1) == "Y") { var yy = parts[0]; } else
	 if (format.substring(1, 2) == "Y") { var yy = parts[1]; } else { var yy = parts[2]; }
  if (parseFloat(yy) <= 50) { yy = (parseFloat(yy) + 2000).toString(); }
  if (parseFloat(yy) <= 99) { yy = (parseFloat(yy) + 1900).toString(); }
  var dt = new Date(parseFloat(yy), parseFloat(mm)-1, parseFloat(dd), 0, 0, 0, 0);
  if (parseFloat(dd) != dt.getDate()) { return false; }
  if (parseFloat(mm)-1 != dt.getMonth()) { return false; }
  return true;
}