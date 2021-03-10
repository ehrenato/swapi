import React from 'react';
import {Card, Grid} from 'semantic-ui-react';

export default function People({data}) {
    return (
        <>
        <h1>Personagens</h1>
            
            <Grid columns={3}>
                {data.map((people, i)=>{
                    return (
                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        {people.name}
                                    </Card.Header>
                                    <Card.Description>
                                        <strong>Altura</strong>
                                        <p>{people.height}</p>
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
