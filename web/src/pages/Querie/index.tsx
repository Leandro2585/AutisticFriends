import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import mapIcon from '../../utils/mapIcon';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, TileLayer, Map } from 'react-leaflet';
import { Container, MapContainer, Footer } from './style';
import api from '../../services/api';

interface Queries {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  latitude: number;
  longitude: number;
  user_querie: number;
}

const Querie: React.FC = () => {
    const [queries, setQueries] = useState<Queries[]>([]);

    const { user } = useAuth();
    const { addToast } = useToast();
    
    const data = {
          user_querie: String(user.id)
    	};

    useEffect(() => {
      api.get('querie', {
      	headers: data
      }).then(response => {
        setQueries(response.data);
      });
    }, [user]);

    async function handleDelete(id: number){
      try{
        await api.delete(`querie/${id}`, {
        	headers: {
	      		data
      		}
      	});

        setQueries(queries.filter(querie => querie.id !== id));

        addToast({
          type: 'success',
          title: 'Consulta deletada com sucesso'
        });
      }catch(err){
        addToast({
          type: 'success',
          title: 'Erro ao deletar esta consulta'

        });
      }
    }

    return(
          <Container>
          {queries.map(querie => (
            <li key={querie.id}>
      				<strong>{querie.title}</strong>
      				<p>{querie.description}</p>
              <MapContainer>
                <Map
                    center={[querie.latitude,querie.longitude]}
                    style={{ width: '90%', height: 180 }}
                    zoom={16}
                    dragging={false}
                    touchZoom={false}
                    zoomControl={false}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                  >
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />

                      <Marker
                        interactive={false}
                        icon={mapIcon}
                        position={[
                          querie.latitude,
                          querie.longitude
                        ]}
                      />

                  </Map>
                  <a
                    className="toGoogleMaps"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${querie.latitude},${querie.longitude}`}

                  >Ver no Google Maps<FiArrowRight size={15} color="#6c6c80"/></a>
              </MapContainer>
              <Footer>
                <span>{querie.date}</span>
        				<span>{querie.time}</span>
              </Footer>
      				<button type="button" onClick={() => handleDelete(querie.id)}><FiTrash2 size={18} color="#02182B"/></button>
      		</li>
          ))}
        </Container>
    );
}

export default Querie;
