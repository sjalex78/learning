# frozen_string_literal: true

require 'mirror'

RSpec.describe Mirror do # rubocop:disable Metrics/BlockLength
  it 'reverse of empty string is an empty string' do
    expect(Mirror.reverse('')).to eq ''
  end

  it 'reverse of a single characters string is the string itself' do
    expect(Mirror.reverse('a')).to eq 'a'
  end

  it 'reversing a nil value throws an Argument exception' do
    expect { Mirror.reverse(nil) }.to raise_error ArgumentError, 'take the cloth off the mirror'
  end

  it 'mirrors Sarah to haraS' do
    skip
    expect(Mirror.reverse('Sarah')).to eq 'haraS'
  end

  it 'has capital letter in last position that is the same as the string input first letter' do
    expect(Mirror)
  end

  it 'returns the first character as the last' do
    expect(Mirror.reverse('Sarah').chars.last).to eq 'S'
  end

  it 'returns the last character as the first' do
    expect(Mirror.reverse('Sarah').chars.first).to eq 'h'
  end

  it 'mirrors Michael to leahciM' do
    skip
    expect(Mirror.reverse('Michael')).to eq 'leahciM'
  end
end
