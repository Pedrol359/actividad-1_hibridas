import { Items } from '../Items/Item';
import './LineaDeTiempo.css';
import {html,css, js, android, ios, phonegap, angular, windoesPhone, xamarin, cordova, react, ionic, swift} from './Descripciones';


export const LineaDeTiempo = ({ mostrar = true,  setVisibility }) =>{
    if(mostrar){
        return(
            <div className="telescopio">
                <div className="imagenLupa">
                    <hr className="linea" />
                    <div className="contenedorElementos">
                        <Items 
                        nombre={'HTML'}
                        creador={'Tim Berners-Lee'}
                        img={'https://cdn-icons-png.flaticon.com/512/174/174854.png'} 
                        ano={1980} 
                        descripcion={html}/>
                        
                        <Items 
                        nombre={'CSS'}
                        creador={'Håkon Wium Lie'}
                        img={'https://www.pnguniverse.com/wp-content/uploads/2020/11/CSS.png'} 
                        ano={1994} 
                        descripcion={css}/>
                        <Items 
                        nombre={'JavaScript'}
                        creador={'Bredan Eich'}
                        img={'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png'} 
                        ano={1995} 
                        descripcion={js}/>
                        <Items 
                        nombre={'Android'}
                        creador={'Andy Rubin'}
                        img={'https://upload.wikimedia.org/wikipedia/commons/f/fc/Android_logo_%282014-2019%29.png'} 
                        ano={2003} 
                        descripcion={android}/>
                        <Items 
                        nombre={'IOS'}
                        creador={'Apple Inc'}
                        img={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png'} 
                        ano={2007} 
                        descripcion={ios}/>
                        <Items 
                        nombre={'PhoneGap'}
                        creador={'Nitobi'}
                        img={'https://etg.digital/wp-content/uploads/2020/04/phonegap-logo-png-transparent-300x300.png'} 
                        ano={2008} 
                        descripcion={phonegap}
                        fondoBlanco={true}
                        />
                        <Items 
                        nombre={'Angular'}
                        creador={'Google Inc'}
                        img={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'} 
                        ano={2010}
                        descripcion={angular}/>
                        <Items 
                        nombre={'Window phone'}
                        creador={'Microsoft'}
                        img={'https://pbs.twimg.com/profile_images/1323343969707720704/mjwTtVBl_400x400.png'} 
                        ano={2010} 
                        descripcion={windoesPhone}
                        fondoBlanco={true}
                        />
                        <Items 
                        nombre={'Xamarin '}
                        creador={'	Miguel de Icaza y Nat Friedman'}
                        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfdoM0sCJ3H9NnhmqG7ETSO-NixW3oTff-OUtbB88q3AlsBrJbgJxmCJtCGZMukPRRyE&usqp=CAU'} 
                        ano={2011} 
                        descripcion={xamarin}
                        fondoBlanco={true}/>
                        <Items 
                        nombre={'Cordova'}
                        creador={'Nitobi'}
                        img={'https://assets.stickpng.com/images/5847f23bcef1014c0b5e4864.png'} 
                        ano={2011} 
                        descripcion={cordova}/>
                        <Items 
                        nombre={'React'}
                        creador={'Jordan Walke'}
                        img={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'} 
                        ano={2013} 
                        descripcion={react}/>
                        <Items 
                        nombre={'Ionic'}
                        creador={'Drifty Co'}
                        img={'http://tech.tribalyte.eu/wp-content/uploads/2018/05/ionic.png'} 
                        ano={2013} 
                        descripcion={ionic}/>
                        <Items 
                        nombre={'Swift'}
                        creador={'Apple Inc'}
                        img={'https://developer.apple.com/swift/images/swift-og.png'} 
                        ano={2014} 
                        descripcion={swift}
                        fondoBlanco={true}/>
                        {/* <Items 
                        nombre={'____'}
                        creador={'____'}
                        img={'_____'} 
                        ano={1994} 
                        descripcion={css}/>
                        <Items 
                        nombre={'____'}
                        creador={'____'}
                        img={'_____'} 
                        ano={1994} 
                        descripcion={css}/> */}
                    </div>
                </div>
            </div>
        );
    }

}