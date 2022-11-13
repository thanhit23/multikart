import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import AuthLayout from '../../../layouts/AuthLayout';
import ListProductComponent from '../../../components/Products/List';
import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from './reducers';
import saga from './saga';
import {
  getProduct as getProductAction,
  deleteProduct as deleteProductAction,
} from './actions';

function ListProducts({ getProducts, data, meta, deleteProduct }) {
  useEffect(() => getProducts(), []);

  const handleDeleteProduct = id => deleteProduct(id);

  return (
    <AuthLayout title="list_product">
      <ListProductComponent
        data={data}
        meta={meta}
        handleDeleteProduct={handleDeleteProduct}
      />
    </AuthLayout>
  );
}

const mapStateToProps = state => {
  const {
    product: {
      list: { data, meta },
    },
  } = state;
  return {
    meta,
    data,
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(getProductAction, dispatch),
  deleteProduct: bindActionCreators(deleteProductAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product', saga });
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withSaga, withReducer, withConnect)(ListProducts);