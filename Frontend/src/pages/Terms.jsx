import { useEffect } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  // 1. Force le haut de page quand on arrive sur Terms
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conditions Générales de Vente (CGV) <br /> & Mentions Légales
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Veuillez lire attentivement ces conditions régissant l'utilisation des services d'Upward.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-sm leading-snug max-w-none text-gray-700">
            
            {/* 1. MENTIONS LÉGALES */}
            <h2>1. Mentions Légales</h2>
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, 
              il est précisé aux utilisateurs du site l'identité des différents intervenants :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nom commercial :</strong> Upward</li>
              <li><strong>Siège social :</strong> 42 rue Hansi, 68270 Wittenheim, France</li>
              <li><strong>Numéro SIRET :</strong> 943 554 139 00015</li>
              <li><strong>TVA :</strong> TVA non applicable, art. 293 B du CGI</li>
              <li><strong>Email de contact :</strong> upwardlearn@gmail.com</li>
              <li><strong>Directeur de la publication :</strong> Karim MAOUI</li>
              <li>
                <strong>Hébergeur :</strong> Zoho Corporation
                <br />
                <span className="text-xs text-gray-500">
                  (Adresse : Beneluxlaan 4B, 3527 HT Utrecht, Pays-Bas)
                </span>
              </li>
            </ul>

            <h2>2. Champ d'application</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) s'appliquent, sans restriction ni réserve, 
              à l'ensemble des ventes conclues par Upward auprès d'acheteurs non professionnels (Clients) 
              désirant acquérir les services de coaching et de formation proposés sur le site.
            </p>

            <h2>3. Services et Réservation</h2>
            <p>
              Upward propose des services de coaching linguistique et de communication professionnelle. 
              Les caractéristiques principales des services sont présentées sur le site internet.
            </p>
            <p>
              <strong>Processus de commande :</strong> Le contrat est formé au moment où le Client confirme sa réservation 
              et procède au paiement. Upward se réserve le droit d'annuler ou de refuser toute commande 
              d'un Client avec lequel il existerait un litige relatif au paiement d'une commande antérieure.
            </p>

            <h2>4. Tarifs et Paiement</h2>
            <p>
              Les services sont fournis aux tarifs en vigueur figurant sur le site lors de l'enregistrement de la commande. 
              Les prix sont exprimés en Euros (€).
            </p>
            <p>
              Le paiement est exigible immédiatement à la commande. Le Client peut effectuer le règlement par carte bancaire 
              ou tout autre moyen proposé sur le site via nos prestataires de paiement sécurisés.
            </p>

            <h2>5. Droit de Rétractation</h2>
            <p>
              Conformément à l'article L.221-18 du Code de la Consommation, le Client dispose d'un délai de quatorze (14) jours 
              à compter de la conclusion du contrat pour exercer son droit de rétractation.
            </p>
            <p>
              <strong>Renonciation expresse :</strong> Si le Client souhaite que la prestation de coaching commence 
              avant la fin du délai de rétractation de 14 jours, il renonce expressément à son droit de rétractation 
              pour les séances effectuées (Article L.221-28 du Code de la Consommation).
            </p>
            <p>
              Pour exercer ce droit (si applicable), veuillez nous contacter à upwardlearn@gmail.com.
            </p>

            <h2>6. Annulation et Report de séance</h2>
            <p>
              Toute séance annulée par le Client moins de 24 heures avant l'heure prévue est due dans sa totalité 
              et ne fera l'objet d'aucun remboursement.
            </p>
            <p>
              Les séances peuvent être reportées sans frais si la demande est effectuée au moins 24 heures à l'avance, 
              selon les disponibilités du coach.
            </p>

            <h2>7. Responsabilité</h2>
            <p>
              Upward est tenu à une obligation de moyens, et non de résultat. Bien que nous mettions tout en œuvre 
              pour assurer la qualité des formations, nous ne pouvons garantir des résultats professionnels spécifiques 
              (obtention d'un emploi, promotion, etc.) qui dépendent de facteurs extérieurs et du travail personnel du Client.
            </p>

            <h2>8. Propriété Intellectuelle</h2>
            <p>
              Le contenu du site internet ainsi que les supports pédagogiques remis lors des séances sont la propriété 
              d'Upward et de ses partenaires. Toute reproduction totale ou partielle est strictement interdite 
              et est susceptible de constituer un délit de contrefaçon.
            </p>

            <h2>9. Données Personnelles (RGPD)</h2>
            <p>
              En application de la réglementation européenne (RGPD), les données nominatives demandées au Client 
              sont nécessaires au traitement de sa commande et à l'établissement des factures. 
              Le Client dispose d'un droit d'accès, de rectification et d'opposition aux informations le concernant.
            </p>

            <h2>10. Litiges et Médiation</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité.
            </p>
            <p>
              Conformément à l'article L.612-1 du Code de la consommation, le consommateur a le droit de recourir gratuitement 
              à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose au professionnel.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500">
                <strong>Dernière mise à jour :</strong> 1er Mai 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <Link 
            to="/" 
            className="btn-primary"
            onClick={() => window.scrollTo(0, 0)} // Scroll vers le haut au clic
          >
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terms;
