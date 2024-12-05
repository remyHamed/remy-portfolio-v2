import "./style.scss";


export const FooterComponent: React.FC = () :React.ReactNode => {
  return (
    <footer>
        <div>
            <div>
                &copy; Rémy Hamed - Tous droits réservés
                </div>
            <div>
                Email : 
                <a href="mailto:hamedremy@hotmail.fr">
                    hamedremy@hotmail.fr
                </a>
            </div>
            <div>
                Téléphone : 
                <a href="tel:+33666271179">
                    06 66 27 11 79
                </a>
            </div>
        </div>
    </footer>
  );
};