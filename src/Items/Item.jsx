import './Items.css';

export const Items = ({nombre, creador,img, ano, descripcion,fondoBlanco=false,cover=false}) =>{
    return (
        <div className="item_container">
            <span className="punto"/>
            <div className={fondoBlanco? 'contImg2':'contImg'}>
                <img className={cover? '' : 'imgCovered'} src={img} alt={nombre} />
            </div>
            <div className="datosBasicos_cont">
                <span className="nombre">{nombre}</span>
                <span  className="ano">{ano}</span>
            </div>
            <p className="descripcion">
                {descripcion}
            </p>
            <span className="creador">Creado por <b>{creador}</b></span>

        </div>

    );
}