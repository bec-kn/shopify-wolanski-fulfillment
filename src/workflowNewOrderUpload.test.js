import { assert } from 'chai';
import { describe, it } from 'mocha';
import sinonTestFactory from 'sinon-test';
import sinon from 'sinon';

import { TimeKeeper } from './util/timeKeeper';
import { FileCreator } from './wolanski/fileCreator';
import { WorkflowNewOrderUpload } from './workflowNewOrderUpload';
import { Shopify } from './shopify/shopify';

require('dotenv').config();

describe('workflow', () => {
  // const sinonTest0 = sinonTestFactory(sinon);
  it('runs when shopify returns orders', async function() {
    // it('runs when shopify returns orders', sinonTest0(async function() {
    // Sinon test sets date for moment to 0
    this.timeout(10000);
    console.log(`FileCreater.genFileName(): ${JSON.stringify(FileCreator.genFileName(), null, 2)}`);
    const workflow = new WorkflowNewOrderUpload();
    await workflow.executeWorkflow();
  });
  // }));
});

// describe('workflow', () => {
//   const sinonTest1 = sinonTestFactory(sinon);
//   it('runs when shopify returns orders', sinonTest1(async function () {
//     // Sinon test sets date for moment to 0
//     console.log(`FileCreater.genFileName(): ${JSON.stringify(FileCreator.genFileName(), null, 2)}`);

//     this.stub(Shopify.prototype, 'excuteQueryOrdersInTimespane').returns(getFakeOrder());

//     const workflow = new WorkflowNewOrderUpload();
//     await workflow.executeWorkflow();
//   }));
// });

// describe('workflow', () => {
//   const sinonTest2 = sinonTestFactory(sinon);
//   it('runs when shopify returns no orders', sinonTest2(async function () {
//     this.stub(Shopify.prototype, 'excuteQueryOrdersInTimespane').returns({ orders: [] });

//     const workflow = new WorkflowNewOrderUpload();
//     await workflow.executeWorkflow();
//   }));
// });

function getFakeOrder() {
  return {
    orders: [
      {
        id: 1073459969,
        email: '',
        closed_at: null,
        created_at: '2017-09-05T14:46:20-04:00',
        updated_at: '2017-09-05T14:46:20-04:00',
        number: 2,
        note: null,
        token: '71aabd15b528a6240b7d00ac9aceaf90',
        gateway: '',
        test: false,
        total_price: '199.00',
        subtotal_price: '199.00',
        total_weight: null,
        total_tax: '0.00',
        taxes_included: false,
        currency: 'USD',
        financial_status: 'paid',
        confirmed: true,
        total_discounts: '0.00',
        total_line_items_price: '199.00',
        cart_token: null,
        buyer_accepts_marketing: false,
        name: '#1002',
        referring_site: null,
        landing_site: null,
        cancelled_at: null,
        cancel_reason: null,
        total_price_usd: '199.00',
        checkout_token: null,
        reference: null,
        user_id: null,
        location_id: null,
        source_identifier: null,
        source_url: null,
        processed_at: '2017-09-05T14:46:20-04:00',
        device_id: null,
        phone: null,
        customer_locale: null,
        app_id: 755357713,
        browser_ip: null,
        landing_site_ref: null,
        order_number: 1002,
        discount_codes: [
        ],
        note_attributes: [
        ],
        payment_gateway_names: [
        ],
        processing_method: '',
        checkout_id: null,
        source_name: '755357713',
        fulfillment_status: null,
        tax_lines: [
        ],
        tags: '',
        contact_email: null,
        order_status_url: null,
        line_items: [
          {
            id: 1071823177,
            variant_id: 447654529,
            title: 'IPod Touch 8GB',
            quantity: 1,
            price: '199.00',
            grams: 567,
            sku: 'IPOD2009BLACK',
            variant_title: 'Black',
            vendor: 'Apple',
            fulfillment_service: 'manual',
            product_id: 921728736,
            requires_shipping: true,
            taxable: true,
            gift_card: false,
            name: 'IPod Touch 8GB - Black',
            variant_inventory_management: 'shopify',
            properties: [
            ],
            product_exists: true,
            fulfillable_quantity: 1,
            total_discount: '0.00',
            fulfillment_status: null,
            tax_lines: [
            ],
          },
        ],
        shipping_lines: [
        ],
        fulfillments: [
        ],
        refunds: [
        ],
      },
    ],
  };
}
