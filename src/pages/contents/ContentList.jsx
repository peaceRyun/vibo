import { Container } from '../../common/style';
import Card from '../../ui/card/Card';
import { GridContainer, Grid, H2 } from './style';

const ContentList = () => {
    const shows = Array(11).fill({
        title: '환승연애',
        image: '/contentdetail/sample/sample-contentlsit.png',
    });

    return (
        <Container>
            <GridContainer>
                <Grid>
                    <H2>xx님이 좋아할만한 예능</H2>
                    {shows.map((show, index) => (
                        <Card key={index} title={show.title} image={show.image} />
                    ))}
                </Grid>
            </GridContainer>
        </Container>
    );
};

export default ContentList;
