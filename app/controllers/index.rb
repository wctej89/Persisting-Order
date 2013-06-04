get '/' do
  @items = Item.order(:position)
  erb :index
end

post '/' do
  params.each do |k, v|
    i = Item.find_by_name(k)
    i.position = v
    i.save
  end
end
