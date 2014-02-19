'use strict'
describe 'filters', ->
  beforeEach module('skeleton')

  describe 'capitalize', ->
    it 'should capitalize a string', inject((capitalizeFilter) ->
      expect(capitalizeFilter('hey')).toBe 'Hey'
    )
    it 'should do nothing with undefined', inject((capitalizeFilter) ->
      expect(capitalizeFilter(null)).toBe undefined
      expect(capitalizeFilter(undefined)).toBe undefined
    )
