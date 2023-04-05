def sort_array(input_array)
  sorted_array = input_array.sort
  sorted_array
end

def array_to_hash(input_array)
  input_array.each_with_index.map{|a,b| [a, b]}
end


describe "my demo" do
  it "runs a test" do
    expect(sort_array([:b, :a])).to eq([:a, :b])
  end

  it "converts array to hash" do
    expect(sort_array([:b, :a])).to eq({1 => :b, 2 => :a})
  end
end
