import React from 'react'
import ActionButtons from './ActionButtons'
import "./BookDetails.css"
import Transactions from './Transactions'
import {useParams} from "react-router-dom"

function BookDetails() {
    const {bookid} = useParams();
    console.log(bookid)

    return (
        <div className="book_details_container">
            <div className="book_details">
                {/* Search box */}
                <div className="search_box">
                    {/* Search input box */}
                    <input type="text" placeholder="Search by Product Name, Client Name" />
                </div>

                {/* Filter options, balance Info, Total Purchase,
                Total sales */}
                <div className="filters_and_info">
                    <div className="left_box">
                        {/* filters */}
                        <div className="filters">
                            {/* Filter options one */}
                            <div className="filter_options">
                                <div className="filter_type">Payment Type</div>
                                <div className="type_options">
                                    <div className="option active_option">All</div>
                                    <div className="option">Cash</div>
                                    <div className="option">Credit</div>

                                </div>
                            </div>
                            {/* Filter options --Date */}

                            <div className="filter_options">
                                <div className="filter_type">Date Type</div>
                                    <div className="type_options">
                                        <div className="option active_option">All</div>
                                        <div className="option">Today</div>
                                        <div className="option">This Week</div>
                                        <div className="option ">This Month</div>
                                    </div>
                            </div>
                            {/* Filter options --Entity type */}

                            <div className="filter_options">
                                <div className="filter_type">Entity Type</div>
                                <div className="type_options">
                                
                                    <div className="option active_option">Sale</div>
                                    <div className="option">Purchase</div>

                                </div>
                            </div>
                        </div>
                        {/* Balance Info */}
                        <div className="balance_info">
                            {/* Box showing Total Sale  */}
                            <div className="box">
                                <div className="box_title">Total sale</div>
                                <div className="box_value">2000</div>
                            </div>
                            {/* Box showing Total Purchase  */}

                            <div className="box">
                                <div className="box_title">Total Purchase</div>
                                <div className="box_value">1000</div>
                            </div>
                            {/* Box showing Total Final Balance */}

                            <div className="box">
                                <div className="box_title">Final Balance</div>
                                <div className="box_value">1000</div>
                            </div>
                        </div>

                    </div>
                    {/* Right box */}
                    <div className="right_box">

                        <div className="right_box_top">
                            <div className="right_box_text">Daily Final Balance</div>
                            <div className="right_box_text">27/5/2021</div>

                        </div>
                        <div className="right_balance_info">
                            {/* Box showing Today's Total Sale  */}

                            <div className="box">
                                <div className="box_title">Total sale</div>
                                <div className="box_value">2000</div>
                            </div>
                            {/* Box showing Today's Total credit  */}

                            <div className="box">
                                <div className="box_title">Credit</div>
                                <div className="box_value">2000</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* Transactions Detais table  */}
            <Transactions bookId={bookid}/>
            {/* Action buttons --Purchase, --sale */}
            <ActionButtons />
        </div>
    )
}

export default BookDetails
