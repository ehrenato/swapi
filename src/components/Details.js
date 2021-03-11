import React from 'react';
import { Card, Grid } from 'semantic-ui-react';


export default function Details({ data }) {
    return (

        <>
            <h1>Naves Detalhadas</h1>

            <Grid columns={3}>
                {data.map((starships, i) => {
                    return (
                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        {starships.name}
                                    </Card.Header>
                                    <Card.Description>
                                        <strong>Modelo</strong>
                                        <p>{starships.model}</p>
                                        <strong>Fabricante</strong>
                                        <p>{starships.manufacturer}</p>
                                        <strong>Custo</strong>
                                        <p>{starships.cost_in_credits}</p>
                                        <strong>Tamanho</strong>
                                        <p>{starships.length}</p>
                                        <strong>Velocidade</strong>
                                        <p>{starships.max_atmosphering_speed}</p>
                                        <strong>Capacidade</strong>
                                        <p>{starships.crew}</p>
                                        <strong>Passageiros</strong>
                                        <p>{starships.passengers}</p>
                                        <strong>Carga</strong>
                                        <p>{starships.cargo_capacity}</p>
                                        <strong>Consumível</strong>
                                        <p>{starships.consumables}</p>
                                        <strong>Dirigibilidade</strong>
                                        <p>{starships.hyperdrive_rating}</p>
                                        <strong>MGLT</strong>
                                        <p>{starships.MGLT}</p>
                                        <strong>Classe</strong>
                                        <p>{starships.starship_class}</p>
                                        <strong>Pilotos</strong>
                                        <p>{starships.pilots}</p>
                                        <strong>Filmes</strong>
                                        <p>{starships.films}</p>
                                        <strong>Criada em:</strong>
                                        <p>{starships.created}</p>
                                        <strong>Editada em:</strong>
                                        <p>{starships.edited}</p>
                                        <strong>URL</strong>
                                        <p>{starships.url}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    );
}
