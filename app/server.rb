require 'sinatra'
require 'soundcloud'
require 'date'

set :public_dir, Proc.new { File.join(root, "..", "public") }


get '/' do
  puts 
  date_today
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

get '/weekend' do
  erb :weekend
end

get '/admininfo' do
  erb :info
end

private

def week_day
  @date = Date.today
  @date.strftime('%A')
end

def date_today
  @day = week_day
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
    erb :weekend
  else
    erb :weekend
  end
end











