#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};

export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag 
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
}; texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundCol
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};or() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
}; present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFo
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};nt& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool va
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};lue) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};

export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_f
#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};

export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());



export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag 
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
}; texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundCol
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};or() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
}; present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFo
// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#ifndef CONDFORMAT_H
#define CONDFORMAT_H

#include <QString>
#include <QColor>
#include <QFont>
#include <QModelIndex>

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };

    // List of alignment texts. Order must be as Alignment definition above.
    static QStringList alignmentTexts() {
        return {QObject::tr("Left"), QObject::tr("Right"), QObject::tr("Center"), QObject::tr("Justify")};
    }

    // Get alignment from combined Qt alignment (note that this will lose any combination of our Alignment enum
    // with other values present in the flag (e.g. vertical alignment).
    static Alignment fromCombinedAlignment(Qt::Alignment align);

    CondFormat() {}
    CondFormat(const QString& filter,
               const QColor& foreground,
               const QColor& background,
               const QFont& font,
               const Alignment alignment = AlignLeft,
               const QString& encoding = QString());

    // Create a new CondFormat from values obtained from the model
    CondFormat(const QString& filter,
               const QAbstractTableModel* model,
               const QModelIndex index,
               const QString& encoding = QString());

    static std::string filterToSqlCondition(const QString& value, const QString& encoding = QString());

private:
    std::string m_sqlCondition;
    QString m_filter;
    QColor m_bgColor;
    QColor m_fgColor;
    QFont m_font;
    Alignment m_align;

public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_fgColor = color; }

    bool isBold() const { return m_font.bold(); }
    bool isItalic() const { return m_font.italic(); }
    bool isUnderline() const { return m_font.underline(); }
    void setBold(bool value) { m_font.setBold(value); }
    void setItalic(bool value) { m_font.setItalic(value); }
    void setUnderline(bool value) { m_font.setUnderline(value); }

    QFont font() const { return m_font; }
    void setFontFamily(const QString &family) { m_font.setFamily(family); }
    void setFontPointSize(int pointSize) { m_font.setPointSize(pointSize); }

    Alignment alignment() const { return m_align; }
    void setAlignment(Alignment value) { m_align = value; }
    Qt::AlignmentFlag alignmentFlag() const;
};

#endif // CONDFORMAT_H

class QAbstractTableModel;

// Conditional formatting for given format to table cells based on a specified condition.
class CondFormat
{
public:

    enum Alignment {
        AlignLeft = 0,
        AlignRight,
        AlignCenter,
        AlignJustify
    };


export function getDirectoryTree({ depth, scanTaskId, types, scanFileIds, page, size }: { 
        depth: number, 
        scanTaskId: string, 
        types: string[],
        scanFileIds: string[] | undefined,
        page: number,
        size: number
}) {
    return http.post('/api/file_service/v2/scan_file', {
        depth,
        scanTaskId,
        types,
        scanFileIds
    }, {
        paramsSerializer: function () {
            let params = [];
            params.push(`page=${page}`);
            params.push(`size=${size}`);
            return params.join("&");
        }
    });
}

export default {
    uploadFile,
    getDirectoryTree
};


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;

export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;

    
export default {
    uploadFile,
    getDirectoryTree
};


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor;


        AlignCenter,
        AlignJustify
    };
private:
    std::string m_sqlCondition;
    QString m_filter;
public:
    std::string sqlCondition() const { return m_sqlCondition; }
    QString filter() const { return m_filter; }

    QColor backgroundColor() const { return m_bgColor; }
    QColor foregroundColor() const { return m_fgColor; }
    void setBackgroundColor(QColor color) { m_bgColor = color; }
    void setForegroundColor(QColor color) { m_f
