import json
import xlsxwriter
from datetime import datetime
from abc import ABCMeta, abstractmethod
from collections import Counter

class BaseXlsBlock(metaclass=ABCMeta):
    NAME = "Block"

    def __init__(self, workbook, worksheet):
        self.workbook = workbook
        self.worksheet = worksheet
        self.row = 0
        self.col = 0

    @abstractmethod
    def write_block(self):
        pass

class HeaderBlock(BaseXlsBlock):
    NAME = "Описание выгрузки"

    def write_block(self):
        self.worksheet.write(self.row, self.col, self.NAME)
        self.row += 1

class QuartetPaymentBlock(BaseXlsBlock):
    NAME = "Отчёт по активным клиентам"

    def write_block(self):
        self.worksheet.write(self.row, self.col, self.NAME)
        self.row += 1

class BankAccountBlock(BaseXlsBlock):
    NAME = "Анализ состояния счёта"

    def write_block(self):
        self.worksheet.write(self.row, self.col, self.NAME)
        self.row += 1

class XlsAnalyticPaymentWriter:
    ANALYTICS_BLOCKS_CLASSES = [
        HeaderBlock,
        QuartetPaymentBlock,
        BankAccountBlock
    ]

    def __init__(self, clients_file, payments_file, output_file):
        self.clients_file = clients_file
        self.payments_file = payments_file
        self.output_file = output_file

    def write_analytics(self):
        workbook = xlsxwriter.Workbook(self.output_file)
        worksheet = workbook.add_worksheet()

        for block_class in self.ANALYTICS_BLOCKS_CLASSES:
            block = block_class(workbook, worksheet)
            block.write_block()

        workbook.close()

def main():
    writer = XlsAnalyticPaymentWriter('clients.json', 'payments.json', f'my_payments_analytics_{datetime.now().strftime("%Y_%m_%d")}.xlsx')
    writer.write_analytics()

if __name__ == "__main__":
    main()
