// src/plugins/CustomJsonPlugin.js
import { IApi } from 'umi';

export default function(api: IApi, options: any) {
    api.onStart(() => {
      console.log('--------custom1222444--------------------');
      console.log('dddd')
    });
    api.describe(({
      key: 'custom',
      config: {
        schema(joi) {
          return joi.object();
        },
      }
    }))
}
