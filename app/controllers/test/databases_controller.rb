class Test::DatabasesController < ApplicationController
  def clean_database
    tables = ActiveRecord::Base.connection.tables
    tables.delete 'schema.migrations'
    tables.each do |t|
      ActiveRecord::Base.connection.execute("DELETE FROM #{t}")
    end
    Rails.application.load_seed unless ['false', false].include?(params['should_seed'])

    render plain: 'Truncated and seeded database'
  end
end
