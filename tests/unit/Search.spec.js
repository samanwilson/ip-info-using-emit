import {mount} from '@vue/test-utils'
import SearchIP from "../../src/components/SearchIP";

describe('SearchIP',()=>{
  it('should retrieve data',  async  function () {
    const wrapper = mount(SearchIP)
  await wrapper.find('.btn').trigger('click')
      const emmited = wrapper.emitted('SendQ')
    expect(emmited).toBe(true)
  });

})