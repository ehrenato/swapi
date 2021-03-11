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
                                        <strong>Peso</strong>
                                        <p>{people.mass}</p>
                                        <strong>Cabelo</strong>
                                        <p>{people.hair_color}</p>
                                        <strong>Pelo</strong>
                                        <p>{people.skin_color}</p>
                                        <strong>Olhos</strong>
                                        <p>{people.eye_color}</p>
                                        <strong>Nascimento</strong>
                                        <p>{people.birth_year}</p>
                                        <strong>Gênero</strong>
                                        <p>{people.gender}</p>
                                        

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
