import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {changedList, itemsFetchData} from '../actions/items';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.onChangeList = this.onChangeList.bind(this);
        this.state = {
            arrSet: [],
        }
    }
    componentDidMount() {
        this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items')
    }


    onChangeList() {
        this.recur(0, this.state.arrSet);
        console.log(this.state.arrSet);
        this.props.changedList(this.state.arrSet);
    }

    recur(id, mas) {
        this.props.items.map(item => {
            if (item.parent_id === id) {
                if (id === 0) {
                    this.setState((state) => {
                        arrSet: state.arrSet.push(item)
                    });
                    this.recur(item.id, this.state.arrSet);
                } else {
                    mas.map(current => {
                        if (current.id === id) {
                            if (!current.children) {
                                current.children = [];
                            }
                            current.children.push(item);
                            this.recur(item.id, current.children);
                        }
                    });
                }
            }
        });
    }

    recursionChild(child){
        let deepChild = child.map( (current) => {
            if(current.hasOwnProperty('children')){
                let childHead = this.recursionChild(current.children);
                return (<li key={current.id}>{current.label}{childHead}</li>);
            }
            else return (<li key={current.id}>{current.label}</li>)

        });
        return ( <ul>{deepChild}</ul>)
    };

    render() {
        return (
            <div>

                <button onClick={ () => {
                    this.onChangeList();
                }}>Change</button>


                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))}
                </ul>
                <ul>Second List
                    { this.props.newItems.map((item) => {
                            if(item.hasOwnProperty('children')){
                                let newSort = this.recursionChild(item.children);
                                return (<li key={item.id}>{item.label}{newSort}</li>);
                            }
                            return (<li key={item.id}>{item.label}</li>);
                        }
                    )}
                </ul>
            </div>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        newItems: state.newItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        changedList: (newItems) => dispatch(changedList(newItems))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);