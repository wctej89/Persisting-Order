10.times do |i|
  Item.create(name: "Thing"+i.to_s, position: i)
end
