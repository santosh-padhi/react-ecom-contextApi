import React,{useContext} from 'react'; // useContext hook
//import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

//import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import CollectionContext from "../../contexts/collection/collection.context";

const CollectionPage = ({ match }) => {
    // After Using ContextAPI
    
    const collections = useContext(CollectionContext);
    const collection = collections[match.params.collectionId];

  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

export default CollectionPage;
