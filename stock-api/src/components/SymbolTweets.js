import React from 'react';
import { Button, Card, CardBody, CardHeader, CardText, CardColumns } from 'reactstrap';

const symbol = `AAPL`
const API = `https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json`


var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=dd133cf6102d7b6d8830b11e00b5c86b11589333526; session_visits_count=1; session_visit_counted=true");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};



class SymbolTweets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`${API}`, requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.messages
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log(items)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <CardColumns>
                    {items.map(item => (
                        <Card className="card" key={item.id}>
                            <CardHeader>{symbol}</CardHeader>
                            <CardBody>
                                {item.user.username} <br /> {item.body}
                            </CardBody>
                        </Card>

                    ))}
                </CardColumns>
            );
        }
    }
    // return (
    //     <Card>
    //         <CardBody>
    //             <CardText>

    //             </CardText>
    //             <Button color="danger">Tweets!</Button>
    //         </CardBody>
    //     </Card>
    // );
    // }

}

export default SymbolTweets;