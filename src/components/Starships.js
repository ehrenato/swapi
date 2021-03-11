import React from 'react';
import {Card, Grid} from 'semantic-ui-react';

export default function Starships({data}) {
    return (
        <>
        <h1>Naves</h1>
            
            <Grid columns={3}>
                {data.map((starships, i)=>{
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
                                        
                                        <button type="button">Detalhes</button>
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