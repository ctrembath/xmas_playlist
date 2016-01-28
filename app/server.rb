require 'sinatra'
require 'soundcloud'
require 'date'

set :public_dir, Proc.new { File.join(root, "..", "public") }

get '/' do
  # date_today
  erb :monday
end

get '/monday' do
  erb :monday
end


get '/tuesday' do
  erb :tuesday
end


get '/wednesday' do
  erb :wednesday
end


get '/thursday' do
  erb :thursday
end


get '/friday' do
  erb :friday
end


get '/saturday' do
  erb :saturday
end


get '/sunday' do
  erb :sunday
end

private

def date_today  
  @date = Date.today
  @day = @date.strftime('%A')

  if @day == 'Monday'
    erb :monday
  elsif @day == 'Tuesday'
    erb :tuesday
  elsif @day == 'Wednesday'
    erb :wednesday
  elsif @day == 'Thursday'
    erb :thursday
  elsif @day == 'Friday'
    erb :friday
  elsif @day == 'Saturday'
    erb :saturday
  elsif @day == 'Sunday'
    erb :sunday
  else
    erb :monday
  end
end











