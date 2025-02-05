import { Inner } from '../../components/contents/style';
import Card from '../../ui/card/Card';
import { GridContainer, Grid, Title } from './style';

const ContentList = () => {
    const shows = Array(11).fill({
        title: '환승연애',
        image: '/contentdetail/sample/sample-contentlsit.png',
    });

    return (
        <Inner>
            <GridContainer>
                <Grid>
                    <Title>
                        <div className='firstS'>xx님이</div>
                        <div className='secondS'>좋아할만한 예능</div>
                    </Title>
                    {shows.map((show, index) => (
                        <Card key={index} title={show.title} image={show.image} />
                    ))}
                </Grid>
            </GridContainer>
        </Inner>
    );
};

export default ContentList;
