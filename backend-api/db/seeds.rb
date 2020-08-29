# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Group.destroy_all
Member.destroy_all
Location.destroy_all
Event.destroy_all
Ticket.destroy_all
Photo.destroy_all
Review.destroy_all

users = User.create([
    {
        full_name: "Dominque Bedford",
        username: 'dbedford',
        password: '1234',
        avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
    {
        full_name: "Anthony Tripp",
        username: 'atripp',
        password: '1234',
        avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
    {
        full_name: "Samuel Rods",
        username: 'srods',
        password: '1234',
        avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
    {
        full_name: "Mary Adams",
        username: 'madams',
        password: '1234',
        avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
])

locations = Location.create([
    {
        city: "Memphis",
        state: "TN"
    },
    {
        city: "Houston",
        state: "TX"
    },
    {
        city: "Atlanta",
        state: "GA"
    },
    {   
        city: "Buffalo",
        state: "NY"
    }
])

    groups = Group.create([
        {
            location_id: Location.all.sample.id,
            name: "Young People of Memphis",
            photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
            description: "Young adults who spend time together",
            num_of_members: 5
        },
        {
            location_id: Location.all.sample.id,
            name: "Humans of Love",
            photo: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            description: "Adults learning to love unconditionally.",
            num_of_members: 5
        }
    ])

events = Event.create([
    {
        group_id: Group.all.sample.id,
        location_id: Location.all.sample.id,
        name: "Riding in Rodgers Park",
        photo: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "Bike Riding",
        date: Faker::Date.in_date_period(year: 2020, month: 9),
        num_of_tickets: 20
    },
    {
        group_id: Group.all.sample.id,
        location_id: Location.all.sample.id,
        name: "Going to See The Craft",
        photo: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        description: "Going to the movies",
        date: Faker::Date.in_date_period(year: 2020, month: 9),
        num_of_tickets: 20
    },
    {
        group_id: Group.all.sample.id,
        location_id: Location.all.sample.id,
        name: "Beach Day",
        photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        description: "Going to the beach",
        date: Faker::Date.in_date_period(year: 2020, month: 9),
        num_of_tickets: 20
    },
    {
        group_id: Group.all.sample.id,
        location_id: Location.all.sample.id,
        name: "Hiking Stone Mountain",
        photo: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        description: "Going hiking",
        date: Faker::Date.in_date_period(year: 2020, month: 9),
        num_of_tickets: 20
    },
    {
        group_id: Group.all.sample.id,
        location_id: Location.all.sample.id,
        name: "Biking Ride Through City",
        photo: "https://images.unsplash.com/photo-1527585065299-489e027a87ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        description: "Bike Riding",
        date: Faker::Date.in_date_period(year: 2020, month: 9),
        num_of_tickets: 20
    },
    {
        group_id: Group.all.sample.id,
        location_id: Location.all.sample.id,
        name: "Beyonce Concert",
        photo: "https://images.unsplash.com/photo-1507638136177-1e4d9d20bd31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1062&q=80",
        description: "Going to the Beyonce Concert",
        date: Faker::Date.in_date_period(year: 2020, month: 9),
        num_of_tickets: 20
    }
])

6.times do |index|
    Member.create!(user_id: User.all.sample.id,
                   group_id: Group.all.sample.id)
end

6.times do |index|
    Ticket.create!(user_id: User.all.sample.id,
                   event_id: Event.all.sample.id)
end

6.times do |index|
    Photo.create!(user_id: User.all.sample.id,
                  group_id: Group.all.sample.id,
                  title: "Photo Title",
                  img_url: "Photo")
end

6.times do |index|
    Review.create!(user_id: User.all.sample.id,
                   group_id: Group.all.sample.id,
                   title: "Review Title",
                   description: "Comment")
end