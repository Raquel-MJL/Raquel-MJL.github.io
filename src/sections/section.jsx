import { ModalButton } from '../components/button/button'
import {botonesInfo} from '../data/buttonData'

const Section = ({title}) => {
    return (
        <section className="w-[95%] mx-auto bg-gray-200 rounded-lg p-5 my-4 ">
             <h2 className="text-xl font-bold text-left mb-4">{title}</h2>
             <div className="bg-white rounded p-4 shadow-sm">
             <ModalButton title={botonesInfo[0].texto} modalContent={(botonesInfo[0].componentes)+(botonesInfo[0].tiempoDeLanzamiento)+(botonesInfo[0].alcance)+(botonesInfo[0].duracion)+(botonesInfo[0].ataque)+(botonesInfo[0].duracion)+(botonesInfo[0].clases)+(botonesInfo[0].duracion)+(botonesInfo[0].informacion)}>             
            </ModalButton>
    

            </div>
        </section>
    );
};

export {Section}